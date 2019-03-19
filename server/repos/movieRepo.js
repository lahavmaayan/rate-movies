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
    console.log(movieId);
    const newReview = new MovieReview({
        ...data
    });
    const currentMovie = await getMovieById(movieId);
    currentMovie.reviews.push(newReview);
    await currentMovie.save();
    await updateTags(data, movieId);
    await updateFmScore(data, movieId);
    return currentMovie;
}

async function updateTags(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const newReview = data.reviewerRating;
    Object.keys(newReview).map(key => {
        const oldAvg = currentMovie.tags[key].avg;
        const count = currentMovie.tags[key].count;
        currentMovie.tags[key].avg =
            (oldAvg * count + parseFloat(newReview[key])) / (count + 1);
        currentMovie.tags[key].count++;
    });
    currentMovie.save();
}

async function updateFmScore(data, movieId) {
    const currentMovie = await getMovieById(movieId);
    const tags = currentMovie.tags;
    const { bechdelTest } = currentMovie.reviewerQuestions;
    //best case all tags are fullfiled, need to adjust when the tags are empty
    currentMovie.fmScore =
        (2 * tags.femaleLead.avg +
            2 * (bechdelTest ? 5 : 0) +
            currentMovie.tags.LGBTQ +
            tags.minorityRepresentation -
            tags.sexualityRate) /
        5;
    currentMovie.save();
}

async function getMovieTags(movieId) {
    const currentMovie = await getMovieById(movieId);
    return currentMovie.tags;
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
