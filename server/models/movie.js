const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewerDetails: {
        age: { type: Number },
        gender: { type: String }
    },
    reviewerQuestions: {
        movieLong: { type: String },
        bechdelTest: { type: String }
    },
    reviewerRating: {
        femaleLead: { type: Number },
        LGBTQ: { type: Number },
        minorityRepresentation: { type: Number },
        sexualityRate: { type: Number }
    }
});

const movieTagsSchema = new mongoose.Schema({
    femaleLead: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    LGBTQ: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    minorityRepresentation: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    sexualityRate: {
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
    tags: movieTagsSchema,
    categories: [String],
    description: String,
    publishingYear: Number,
    pictureUrl: String,
    cast: [String],
    duration: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie, MovieReview };
