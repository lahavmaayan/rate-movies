function connectToDB() {
    const MongoClient = require('mongodb').MongoClient;
    return MongoClient.connect('mongodb://localhost:27017').then(dbServer => dbServer.db());
}
module.exports = { connectToDB };
