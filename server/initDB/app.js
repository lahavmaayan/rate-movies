const mongoose = require('mongoose');
const { Movie } = require('../models/movie');

main();
async function main() {
    console.log('initDB started');
    await initDB();
    console.log('initDB finished');
    process.exit();
}

async function connectToDB() {
    mongoose
        .connect('mongodb://localhost/rate-movies')
        .then(() => console.log('connected to mongo db'))
        .catch(err => console.error('could not connect to mongo db', err));
}

async function initDB() {
    await connectToDB();
    await Movie.deleteMany({});
    await Movie.insertMany([
        {
            name: 'harry potter',
            categories: ['fantasy'],
            description: 'movie description',
            publishingYear: 2001,
            pictureUrl:
                'https://www.949powerfm.com.au/images/harry_potter-2.jpg',
            cast: ['Richard Harris', 'Maggie Smith'],
            duration: '152 minutes',
            reviews: [],
            tags: {}
        },
        {
            name: 'hannibal',
            categories: ['drama'],
            description: 'movie description',
            publishingYear: 2001,
            pictureUrl:
                'https://images-na.ssl-images-amazon.com/images/I/51J%2BfT8ILiL.jpg',
            cast: ['Antony Hopkins'],
            duration: '131 minutes',
            reviews: [],
            tags: {}
        },
        {
            name: 'pretty woman',
            categories: ['romance'],
            description: 'movie description',
            publishingYear: 1990,
            pictureUrl:
                'https://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2Fpretty_woman_1778730490.jpg&action=ProductDetail',
            cast: ['Julia Roberts'],
            duration: '119 minutes',
            reviews: [],
            tags: {}
        },
        {
            name: 'star Treck',
            description: 'aaaaa',
            categories: ['fff'],
            duration: '119 minutes',
            publishingYear: 1990,
            pictureUrl:
                'https://cdn3.movieweb.com/i/article/wPohhTIbvoObR8bJ7k7hfLM29giXZd/798:50/Star-Trek-Movie-Quentin-Tarantino-Patrick-Stewart-Picard.jpg',
            tags: { funnyRate: { avg: 3, count: 10 } },
            reviews: []
        }
    ]);
}
