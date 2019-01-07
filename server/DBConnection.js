const MongoClient = require('mongodb').MongoClient;
let db;
var mongoClient;

async function getConnection() {
    if (mongoClient === undefined) {
        mongoClient = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true }
        );
        db = mongoClient.db('rate-movies');
    }
    return db;
}
module.exports = { getConnection, mongoClient };
