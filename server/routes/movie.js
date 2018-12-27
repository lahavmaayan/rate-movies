const movieDB = require('../models/movie');
const express = require('express');
const router = express.Router();

router.get('/:movieId', async (req, res) => {
    // a stub file I created to simulate access to db
    const movie = await movieDB.GetMovieById(req.params.movieId);
    if (!movie) res.status(404).send('The movie with given id was not found!');

    res.send(movie);
});

module.exports = router;
