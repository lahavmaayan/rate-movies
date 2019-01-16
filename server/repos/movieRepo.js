const mongoose = require('mongoose');
const { Movie, MovieReview } = require('../models/movie');

async function getMovieById(movieId) {
    if (mongoose.Types.ObjectId.isValid(movieId)) {
        return await Movie.findById(movieId).select('-__v');
    }
}

async function getAllMovies() {
    return Movie.find({}).select('-__v');
}

async function createNewMovie(movie) {
    const newMovie = new Movie({ ...movie });
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
    currentMovie.rank.push(newReview);
    await currentMovie.save();
    return currentMovie;
}

async function getMovieReview(movieId) {
    const currentMovie = await getMovieById(movieId);
    return currentMovie.rank;
}

module.exports = {
    getMovieById,
    getAllMovies,
    createNewMovie,
    updateMovie,
    deleteMovie,
    postReview,
    getMovieReview
};
