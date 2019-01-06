const MongoClient = require('mongodb').MongoClient;
var db;
var mongoClient;

async function getConnection() {
    if (mongoClient === undefined) {
        mongoClient = await MongoClient.connect('mongodb://localhost:27017');
        db = mongoClient.db('rate-movies');
    }
    return db;
}
module.exports = { getConnection, mongoClient };
