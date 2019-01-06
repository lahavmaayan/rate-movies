const MongoClient = require('mongodb').MongoClient;
main();
async function main() {
    console.log('initDB started');
    await initDB();
    console.log('initDB fininshed');
    process.exit();
}

async function connectToDB() {
    const dbServer = await MongoClient.connect('mongodb://localhost:27017');
    return dbServer.db('rate-movies');
}

async function initDB() {
    const db = await connectToDB();
    const movies = await db.collection('movies');
    await movies.deleteMany({});
    await movies.insertMany([
        { name: 'harry potter' },
        { name: 'hannibal' },
        { name: 'pretty woman' }
    ]);
}
