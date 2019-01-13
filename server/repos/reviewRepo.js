const Review = require('../models/review');

async function postReview(data) {
    const newReview = new Review({
        reviewerDetails: { ...data }
    });
    await newReview.save();
    return newReview;
}

async function getAllReviews() {
    return Review.find({}).select('-__v');
}

module.exports = { postReview, getAllReviews };
