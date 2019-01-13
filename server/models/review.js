const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    // rating: [
    //     {
    //         parameter: { type: String }
    //     },
    //     {
    //         score: { type: Number }
    //     }
    // ],
    reviewerDetails: {
        age: { type: Number },
        gender: { type: String }
    }
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
