const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewerDetails: {
        age: { type: Number },
        gender: { type: String }
    },
    reviewerQuestions: {
        movieLong: { type: String },
        womenLeadRole: {
            isTrue: { type: String },
            ifTrueCharacterName: { type: String }
        }
    },
    reviewerRating: {
        funnyRate: { type: Number },
        feminismRate: { type: Number },
        violenceRate: { type: Number },
        sexualityRate: { type: Number },
        fascinateRate: { type: Number }
    }
});

const movieTagsSchema = new mongoose.Schema({
    funnyRate: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    feminismRate: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    violenceRate: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    sexualityRate: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    fascinateRate: {
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
