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
        .connect('mongodb://localhost/rate-movies', {
            useNewUrlParser: true,
            useCreateIndex: true
        })
        .then(() => console.log('connected to mongo db'))
        .catch(err => console.error('could not connect to mongo db', err));
}

async function initDB() {
    await connectToDB();
    await Movie.deleteMany({});
    await Movie.insertMany([
        {
            id: 25941,
            imageUrl:
                'https://image.tmdb.org/t/p/w342/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            title: 'Harry Brown',
            reviews: [],
            ratings: {},
            tags: ['bechdelTest']
        },
        {
            id: 672,
            title: 'Harry Potter and the Chamber of Secrets',
            categories: ['fantasy'],
            description: 'movie description',
            publishingYear: 2001,
            imageUrl: 'https://www.949powerfm.com.au/images/harry_potter-2.jpg',
            reviews: [],
            ratings: {},
            tags: ['bechdelTest', 'minorityRepresentation']
        },
        {
            id: 671,
            title: "Harry Potter and the Philosopher's Stone",
            imageUrl:
                'https://image.tmdb.org/t/p/w342/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            reviews: [],
            ratings: {}
        },
        {
            id: 9740,
            title: 'Hannibal',
            categories: ['drama'],
            description: 'movie description',
            publishingYear: 2001,
            imageUrl:
                'https://images-na.ssl-images-amazon.com/images/I/51J%2BfT8ILiL.jpg',
            reviews: [],
            ratings: {},
            tags: ['minorityRepresentation']
        },
        {
            id: 114,
            title: 'Pretty Woman',
            categories: ['romance'],
            description: 'movie description',
            publishingYear: 1990,
            imageUrl:
                'https://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2Fpretty_woman_1778730490.jpg&action=ProductDetail',
            reviews: [],
            ratings: {}
        },
        {
            id: 13475,
            title: 'Star Trek',
            description: 'aaaaa',
            categories: ['fff'],
            publishingYear: 1990,
            imageUrl:
                'https://cdn3.movieweb.com/i/article/wPohhTIbvoObR8bJ7k7hfLM29giXZd/798:50/Star-Trek-Movie-Quentin-Tarantino-Patrick-Stewart-Picard.jpg',
            ratings: {},
            reviews: []
        }
    ]);
}
