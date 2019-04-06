var apiKey = 'c090bd13c500ba7fe7733f2f7a0cf1c8';
const tmdb = require('../tmdb/tmdb').init(apiKey);

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

module.exports = {
    getMovieById,
    searchMovies
};
