const mongoose = require('mongoose');
const { Movie, MovieReview } = require('../models/movie');

async function getMovieById(movieId) {
    if (mongoose.Types.ObjectId.isValid(movieId)) {
        return await Movie.findById(movieId);
    }
}

async function getAllMovies() {
    return Movie.find({}).select('-__v');
}
function nameQuery(name) {
    return { title: { $regex: '.*' + name + '.*' } };
}

async function getMovieBySearchNameParam(name) {
    return Movie.find(nameQuery(name));
}

async function getMoviesBy(tags, name) {
    const tagsQuery = { tags: { $all: tags } };
    return Movie.find(tagsQuery);
}

async function searchMovies(data) {
    return Movie.find({
        $and: [
            {
                'ratings.femaleLead.avg': {
                    $gte: data.femaleLeadTag === 1 ? 4 : 0
                }
            },
            { 'ratings.LGBTQ.avg': { $gte: data.LGBTQTag === 1 ? 4 : 0 } },
            {
                'ratings.minorityRepresentation.avg': {
                    $gte: data.minorityRepresentationTag === 1 ? 4 : 0
                }
            },
            {
                'ratings.sexualityRate.avg': {
                    $gte: data.sexualityRateTag === 1 ? 4 : 0
                }
            },
            {
                'ratings.bechdelTest.avg': {
                    $gte: data.bechdelTestTag === 1 ? 4 : 0
                }
            },
            { title: { $regex: '.*' + data.title + '.*' } }
        ]
    });
}

async function createNewMovie(movie) {
    const newMovie = new Movie({ ...movie, ratings: {} });
    await newMovie.save();
    return newMovie;
}

async function updateMovie({ movieId, title }) {
    return await Movie.findByIdAndUpdate(movieId, { title });
}

async function deleteMovie(movieId) {
    return await Movie.findByIdAndRemove(movieId);
}

async function postReview(data, movieId) {
    const newReview = new MovieReview({
        ...data
    });
    console.log(movieId);
    const currentMovie = await getMovieById(movieId);
    console.log(currentMovie);
    currentMovie.reviews.push(newReview);
    await currentMovie.save();
    await updateRatings(data, movieId);
    await updateFmScore(data, movieId);
    await updateTags(movieId);
    return await currentMovie;
}

async function updateTags(movieId) {
    const currentMovie = await getMovieById(movieId);
    const ratings = currentMovie.ratings.toObject();
    const ratingNames = Object.keys(ratings);
    const tagThreshold = 3;
    currentMovie.tags = ratingNames.filter(
        ratingName => ratings[ratingName].avg > tagThreshold
    );
    currentMovie.save();
}

async function updateRatings(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const { bechdelTest } = data.reviewerQuestions;
    const bechdel = bechdelTest ? 5 : 0;
    const newReview = { ...data.reviewerRating, bechdelTest: bechdel };
    Object.keys(newReview).map(key => {
        const currentRating = currentMovie.ratings[key];
        const oldAvg = parseFloat(currentRating.avg);
        const count = currentRating.count;
        currentMovie.ratings[key].avg =
            (oldAvg * count + parseFloat(newReview[key])) / (count + 1);
        currentMovie.ratings[key].count++;
    });
    await currentMovie.save();
}

async function updateFmScore(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const ratings = currentMovie.ratings;
    //best case all ratings are fulfilled, need to adjust when the ratings are empty
    currentMovie.fmScore =
        (2 * ratings.femaleLead.avg +
            2 * ratings.bechdelTest.avg +
            currentMovie.ratings.LGBTQ.avg +
            ratings.minorityRepresentation.avg -
            ratings.sexualityRate.avg) /
        6;
    await currentMovie.save();
}

async function getMovieRating(movieId) {
    const currentMovie = await getMovieById(movieId);
    return await currentMovie.ratings;
}

module.exports = {
    getMovieById,
    getAllMovies,
    searchMovies,
    createNewMovie,
    updateMovie,
    deleteMovie,
    postReview,
    getMovieBySearchNameParam,
    getMoviesByTags: getMoviesBy
};
