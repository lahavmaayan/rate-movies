function initDB() {
    try {
        const MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://localhost:27017')
        .then(db => fillDB(db));
    } catch (error) {
        console.log(error);
    }
}

function fillDB(dbServer) {
    const db = dbServer.db('exampleDb');
    db.dropCollection('movies')
    .then(b => db.collection('movies').insertMany(
        [
            { id: '1', name: 'harry potter' },
            { id: '2', name: 'hannibal' },
            { id: '3', name: 'pretty woman' }
        ])
    );
}

function fillDB2(db) {}

async function getMovieById(movieId) {
    const MongoClient = require('mongodb').MongoClient;
    var dbRead = MongoClient.connect('mongodb://localhost:27017').then(
        dbServer => {
            const db = dbServer.db('exampleDb');
            var collection = db.collection('movies');
            var query = { id: parseInt(movieId) };
            return collection.findOne(query);
        }
    );
    return await dbRead;
}

module.exports = { getMovieById, initDB };
