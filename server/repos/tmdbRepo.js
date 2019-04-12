var apiKey = 'c090bd13c500ba7fe7733f2f7a0cf1c8';
const tmdb = require('../tmdb/tmdb').init(apiKey);
const https = require('https');
const baseUrl = 'https://api.themoviedb.org/3';
const baseImageUrl = 'https://image.tmdb.org/t/p/w342';

async function getMovieById(movieId) {
    let promise = new Promise((resolve, reject) => {
        tmdb.movie.info(movieId, (err, res) => {
            resolve(res);
        });
    });

    return await promise;
}

async function searchMovies(data) {
    let promise = new Promise((resolve, reject) => {
        tmdb.search.movie(data, 1, (err, res) => {
            resolve(
                res.results.map(function(tmdb) {
                    return {
                        id: tmdb.id,
                        title: tmdb.title,
                        description: tmdb.overview,
                        imageUrl: `${baseImageUrl}/${tmdb.poster_path}`
                    };
                })
            );
        });
    });

    return await promise;
}

async function getMovieDetails(id) {
    const requestUrl = `${baseUrl}/movie/${id}?api_key=${apiKey}`;
    return new Promise((resolve, reject) => {
        https.get(requestUrl, res => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', data => {
                body += data;
            });
            res.on('end', () => {
                body = JSON.parse(body);
                const response = {
                    title: body.title,
                    description: body.overview,
                    imageUrl: `${baseImageUrl}/${body.poster_path}`,
                    ratings: {},
                    reviews: []
                };
                resolve(response);
            });
            res.on('error', err => {
                reject(err);
            });
        });
    });
}

module.exports = {
    getMovieById,
    searchMovies,
    getMovieDetails
};
