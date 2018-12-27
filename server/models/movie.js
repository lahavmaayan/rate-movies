// this is for testing the api till we connect to db
const movies = [
    { id: 1, name: 'harry potter' },
    { id: 2, name: 'hannibal' },
    { id: 3, name: 'pretty woman' }
];

const GetMovieById = async movieId => {
    const pp = movies.find(m => m.id === parseInt(movieId));
    return pp;
};

module.exports = { GetMovieById };
