const { connectToDB } = require('../connectToDB');

async function initDB() {
    const db = await connectToDB();
    const movies = await db.collection('movies');
    await movies.deleteMany({});
    await movies.insertMany([
        { id: '1', name: 'harry potter' },
        { id: '2', name: 'hannibal' },
        { id: '3', name: 'pretty woman' }
    ]);
}

async function getMovieById(movieId) {
    const db = await connectToDB();
    const movies = await db.collection('movies');
    const movie = await movies.findOne({ id: movieId });
    return movie;
}

module.exports = { getMovieById, initDB };
