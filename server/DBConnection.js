const MongoClient = require('mongodb').MongoClient;
var db;
async function connectToDB() {
    const dbServer = await MongoClient.connect('mongodb://localhost:27017');
    return dbServer.db('rate-movies');
}
function getConnection() {
    if (db === undefined) {
        db = connectToDB();
    }
    return db;
}
module.exports = { getConnection };
