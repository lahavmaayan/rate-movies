const mongoose = require('mongoose');
const Movie = require('../models/movie');

main();
async function main() {
    console.log('initDB started');
    await initDB();
    console.log('initDB fininshed');
    process.exit();
}

async function connectToDB() {
    mongoose.connect('mongodb://localhost/rate-movies')
        .then(() => console.log('connected to mongo db'))
        .catch(err => console.error("could not connect to mongo db", err));

}

async function initDB() {
    await connectToDB();
    await Movie.deleteMany({});
    await Movie.insertMany([
        { name: 'harry potter' },
        { name: 'hannibal' },
        { name: 'pretty woman' }
    ]);
}
