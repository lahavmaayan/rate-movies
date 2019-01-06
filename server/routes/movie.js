const Joi = require('joi');
const movieDB = require('../models/movie');
const validationSchema = require('../schemas/validation');
const express = require('express');
const router = express.Router();
const movieRepo = require('../models/movieRepo');

router.get('/', (req, res) => {
    res.send(movieDB.movies);
});

router.get('/:movieId', async (req, res) => {
    try {
        const movie = await movieRepo.getMovieById(req.params.movieId);
        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(404).send(validationSchema.movieNotFound);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.post('/', async (req, res) => {
    const { error } = validateMovieName(req.body.name);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const newMovie = await movieDB.addNewMovie({
        name: req.body.name
    });
    res.send(newMovie);
});

router.put('/:movieId', async (req, res) => {
    const movie = await movieDB.getMovieById(req.params.movieId);
    if (!movie) return res.status(404).send(validationSchema.movieNotFound);

    const { error } = validateMovieName(req.body.name);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    await movieDB.updateMovieName(movie, req.body.name);
    res.send(movie);
});

router.delete('/:movieId', async (req, res) => {
    const movie = await movieDB.getMovieById(req.params.movieId);
    if (!movie) return res.status(404).send(validationSchema.movieNotFound);

    await movieDB.deleteMovie(movie);
    res.send(movie);
});

function validateMovieName(name) {
    return Joi.validate(name, validationSchema.movieName);
}

module.exports = router;
