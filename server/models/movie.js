const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
