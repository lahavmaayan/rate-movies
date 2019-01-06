const { connectToDB } = require('../connectToDB');
const ObjectId = require('mongodb').ObjectId;

async function getMovieById(movieId) {
    const db = await connectToDB();
    const movies = await db.collection('movies');
    if (ObjectId.isValid(movieId)) {
        const movie = await movies.findOne({ _id: new ObjectId(movieId) });
        return movie;
    } else {
        return null;
    }
}

module.exports = { getMovieById };
