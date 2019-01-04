async function connectToDB() {
    const MongoClient = require('mongodb').MongoClient;
    const dbServer = await MongoClient.connect('mongodb://localhost:27017');
    return dbServer.db();
}
module.exports = { connectToDB };
