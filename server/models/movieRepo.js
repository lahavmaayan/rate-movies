const { getConnection } = require('../DBConnection');
const ObjectId = require('mongodb').ObjectId;

async function getMovieById(movieId) {
    const db = await getConnection();
    const movies = await db.collection('movies');
    if (ObjectId.isValid(movieId)) {
        return await movies.findOne({ _id: new ObjectId(movieId) });
    } else {
        return null;
    }
}

async function getAllMovies() {
    const db = await getConnection();
    return await db
        .collection('movies')
        .find()
        .toArray();
}

async function createNewMovie(movie) {
    const db = await getConnection();
    return await db.collection('movies').insertOne({ ...movie });
}

async function updateMovie({ movieId, name }) {
    const db = await getConnection();
    return await db.collection('movies').updateOne(
        { _id: ObjectId(movieId) },
        {
            $set: {
                name: name
            }
        }
    );
}

async function deleteMovie(movieId) {
    const db = await getConnection();
    return await db.collection('movies').deleteOne({ _id: ObjectId(movieId) });
}

module.exports = {
    getMovieById,
    getAllMovies,
    createNewMovie,
    updateMovie,
    deleteMovie
};
