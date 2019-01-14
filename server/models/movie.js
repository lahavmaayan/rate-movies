const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    reviewerDetails: {
        age: { type: Number },
        gender: { type: String }
    },
    rating: {
        strongFemaleLead: { type: Number },
        feminist: { type: Number },
        violent: { type: Number },
        fascinating: { type: Number },
        sexual: { type: Number },
        funny: { type: Number },
        happyEnding: { type: Number }
    }
});

const MovieReview = mongoose.model('MovieReview', reviewSchema);

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    rank: [reviewSchema]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie, MovieReview };
