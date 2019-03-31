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

async function createNewMovie(movie) {
    const newMovie = new Movie({ ...movie, tags: {} });
    await newMovie.save();
    return newMovie;
}

async function updateMovie({ movieId, name }) {
    return await Movie.findByIdAndUpdate(movieId, { name });
}

async function deleteMovie(movieId) {
    return await Movie.findByIdAndRemove(movieId);
}

async function postReview(data, movieId) {
    const newReview = new MovieReview({
        ...data
    });
    const currentMovie = await getMovieById(movieId);
    currentMovie.reviews.push(newReview);
    await currentMovie.save();
    await updateTags(data, movieId);
    await updateFmScore(data, movieId);
    return await currentMovie;
}

async function updateTags(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const { bechdelTest } = data.reviewerQuestions;
    const bechdel = bechdelTest ? 5 : 0;
    const newReview = { ...data.reviewerRating, bechdelTest: bechdel };
    Object.keys(newReview).map(key => {
        const oldAvg = parseFloat(currentMovie.tags[key].avg);
        const count = currentMovie.tags[key].count;
        currentMovie.tags[key].avg =
            (oldAvg * count + parseFloat(newReview[key])) / (count + 1);
        currentMovie.tags[key].count++;
    });
    await currentMovie.save();
}

async function updateFmScore(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const tags = currentMovie.tags;
    //best case all tags are fulfilled, need to adjust when the tags are empty
    currentMovie.fmScore =
        (2 * tags.femaleLead.avg +
            2 * tags.bechdelTest.avg +
            currentMovie.tags.LGBTQ.avg +
            tags.minorityRepresentation.avg -
            tags.sexualityRate.avg) /
        6;
    await currentMovie.save();
}

async function getMovieTags(movieId) {
    const currentMovie = await getMovieById(movieId);
    return await currentMovie.tags;
}

module.exports = {
    getMovieById,
    getAllMovies,
    createNewMovie,
    updateMovie,
    deleteMovie,
    postReview,
    getMovieTags
};
