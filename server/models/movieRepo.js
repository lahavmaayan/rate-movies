const { connectToDB } = require('../connectToDB');

function initDB() {
    try {
        connectToDB().then(db => fillDB(db));
    } catch (error) {
        console.log(error);
    }
}

function fillDB(db) {
    db.collection('movies')
        .deleteMany({}).then(() => 
        db.collection('movies').insertMany([
                    { id: '1', name: 'harry potter' },
                    { id: '2', name: 'hannibal' },
                    { id: '3', name: 'pretty woman' }
                ])
        );
}

async function getMovieById(movieId) {
    const dbRead = connectToDB().then(db =>
        db.collection('movies').findOne({ id: movieId })
    );
    return await dbRead;
}

module.exports = { getMovieById, initDB };
