const Joi = require('joi');
const validationSchema = require('../validationSchema');
const express = require('express');
const router = express.Router();
const movieRepo = require('../repos/movieRepo');

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

router.get('/', async (req, res) => {
    try {
        const movies = await movieRepo.getAllMovies();
        res.status(200).send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.post('/', async (req, res) => {
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
        console.log(err);
        res.status(500).send();
    }
});

router.put('/:movieId', async (req, res) => {
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
        console.log(err);
        res.status(500).send();
    }
});

router.delete('/:movieId', async (req, res) => {
    try {
        let deleteId = await movieRepo.deleteMovie(req.params.movieId);
        if (!deleteId)
            return res.status(404).send(validationSchema.movieNotFound);
        res.status(200).send(deleteId);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.post('/:movieId/rate', async (req, res) => {
    try {
        const newReview = await movieRepo.postReview(
            {
                ...req.body
            },
            req.params.movieId
        );
        res.status(200).send(newReview);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

// router.get('/:movieId/rate', async (req, res) => {
//     try {
//         const reviews = await movieRepo.getAllReviews();
//         if (reviews) {
//             res.status(200).send(reviews);
//         } else {
//             res.status(404).send(validationSchema.reviewsNotFound);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

function validateMovieName(name) {
    return Joi.validate(name, validationSchema.movieName);
}

module.exports = router;
