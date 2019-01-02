const uniqid = require('uniqid');
// For testing the api till we connect to db
const movies = [
    { id: uniqid(), name: 'harry potter' },
    { id: uniqid(), name: 'hannibal' },
    { id: uniqid(), name: 'pretty woman' }
];

const getMovieById = async movieId => {
    return movies.find(movie => movie.id.toString() === movieId);
};

const addNewMovie = async ({ name }) => {
    const newMovie = {
        id: uniqid(),
        name: name
    };
    movies.push(newMovie);
    return newMovie;
};

const updateMovieName = async (movie, name) => {
    const movieToUpdate = await getMovieById(movie.id);
    movieToUpdate.name = name;
};

const deleteMovie = async movie => {
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
};

module.exports = {
    getMovieById,
    addNewMovie,
    updateMovieName,
    deleteMovie,
    movies
};
