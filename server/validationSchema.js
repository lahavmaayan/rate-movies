const Joi = require('joi');

const validationSchema = {
    movieName: Joi.string()
        .min(3)
        .required(),
    movieNotFound: 'Movie with given id was not found!',
    reviewsNotFound: 'There are no reviews'
};

module.exports = validationSchema;
