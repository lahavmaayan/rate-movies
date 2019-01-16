const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
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

const movieTagsSchema = new mongoose.Schema({
    strongFemaleLead: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    feminist: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    violent: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    fascinating: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    sexual: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    funny: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    happyEnding: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    }
});

const MovieReview = mongoose.model('MovieReview', reviewSchema);

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    reviews: [reviewSchema],
    tags: movieTagsSchema
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie, MovieReview };
