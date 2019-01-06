const MongoClient = require('mongodb').MongoClient;
async function connectToDB() {
    const dbServer = await MongoClient.connect('mongodb://localhost:27017');
    return dbServer.db();
}
module.exports = { connectToDB };
