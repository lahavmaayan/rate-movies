var apiKey = 'c090bd13c500ba7fe7733f2f7a0cf1c8';
const tmdb = require('../tmdb/tmdb').init(apiKey);
// const baseUrl = `https://api.themoviedb.org/3/movie/114?api_key=c090bd13c500ba7fe7733f2f7a0cf1c8&language=en-US`;

const https = require('https');
const baseUrl = 'https://api.themoviedb.org/3';

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
                        imageUrl:
                            'https://image.tmdb.org/t/p/w500' +
                            tmdb.poster_path,
                        imageUrlV2:
                            'https://image.tmdb.org/t/p/w92' + tmdb.poster_path,
                        imageUrlV3:
                            'https://image.tmdb.org/t/p/w780' + tmdb.poster_path
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
                resolve(body);
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
