const mongoose = require('mongoose');
const Movie = require('./movie');

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

module.exports = {
    getMovieById,
    getAllMovies,
    createNewMovie,
    updateMovie,
    deleteMovie
};
