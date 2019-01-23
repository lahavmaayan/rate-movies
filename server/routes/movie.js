const Joi = require('joi');
const validationSchema = require('../validationSchema');
const express = require('express');
const router = express.Router();
const movieRepo = require('../repos/movieRepo');

router.get('/:movieId', async (req, res, next) => {
    try {
        const movie = await movieRepo.getMovieById(req.params.movieId);
        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(404).send(validationSchema.movieNotFound);
        }
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const movies = await movieRepo.getAllMovies();
        res.status(200).send(movies);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const { error } = validateMovieName(req.body.name);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const newMovie = await movieRepo.createNewMovie({
            name: req.body.name
        });
        res.status(200).send(newMovie);
    } catch (err) {
        next(err);
    }
});

router.put('/:movieId', async (req, res, next) => {
    const movie = await movieRepo.getMovieById(req.params.movieId);
    if (!movie) return res.status(404).send(validationSchema.movieNotFound);

    const { error } = validateMovieName(req.body.name);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        await movieRepo.updateMovie({
            movieId: req.params.movieId,
            name: req.body.name
        });
        res.status(200).send(req.params.movieId);
    } catch (err) {
        next(err);
    }
});

router.delete('/:movieId', async (req, res, next) => {
    try {
        let deleteId = await movieRepo.deleteMovie(req.params.movieId);
        if (!deleteId)
            return res.status(404).send(validationSchema.movieNotFound);
        res.status(200).send(deleteId);
    } catch (err) {
        next(err);
    }
});

router.post('/:movieId/rate', async (req, res, next) => {
    try {
        const newReview = await movieRepo.postReview(
            req.body,
            req.params.movieId
        );
        res.status(200).send(newReview);
    } catch (err) {
        next(err);
    }
});

router.get('/:movieId/rate', async (req, res, next) => {
    try {
        const movieTags = await movieRepo.getMovieTags(req.params.movieId);
        res.status(200).send(movieTags);
    } catch (err) {
        next(err);
    }
});

function validateMovieName(name) {
    return Joi.validate(name, validationSchema.movieName);
}

module.exports = router;
