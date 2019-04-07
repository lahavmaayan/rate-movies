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
                'https://image.tmdb.org/t/p/w500/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            imageUrlV2:
                'https://image.tmdb.org/t/p/w92/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            imageUrlV3:
                'https://image.tmdb.org/t/p/w780/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            title: 'Harry Brown',
            reviews: [],
            ratings: {}
        },
        {
            title: 'harry potter',
            categories: ['fantasy'],
            description: 'movie description',
            publishingYear: 2001,
            imageUrl: 'https://www.949powerfm.com.au/images/harry_potter-2.jpg',
            cast: ['Richard Harris', 'Maggie Smith'],
            duration: '152 minutes',
            reviews: [],
            ratings: {},
            tags: ['Bechdel Test']
        },
        {
            title: 'harry potter 222222',
            imageUrl:
                'https://image.tmdb.org/t/p/w500/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            imageUrlV2:
                'https://image.tmdb.org/t/p/w92/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            imageUrlV3:
                'https://image.tmdb.org/t/p/w780/68V1ClrCT7ik7UDiAkIDliRaAXf.jpg',
            reviews: [],
            ratings: {}
        },
        {
            title: 'hannibal',
            categories: ['drama'],
            description: 'movie description',
            publishingYear: 2001,
            imageUrl:
                'https://images-na.ssl-images-amazon.com/images/I/51J%2BfT8ILiL.jpg',
            cast: ['Antony Hopkins'],
            duration: '131 minutes',
            reviews: [],
            ratings: {}
        },
        {
            title: 'pretty woman',
            categories: ['romance'],
            description: 'movie description',
            publishingYear: 1990,
            imageUrl:
                'https://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2Fpretty_woman_1778730490.jpg&action=ProductDetail',
            cast: ['Julia Roberts'],
            duration: '119 minutes',
            reviews: [],
            ratings: {}
        },
        {
            title: 'star Treck',
            description: 'aaaaa',
            categories: ['fff'],
            duration: '119 minutes',
            publishingYear: 1990,
            imageUrl:
                'https://cdn3.movieweb.com/i/article/wPohhTIbvoObR8bJ7k7hfLM29giXZd/798:50/Star-Trek-Movie-Quentin-Tarantino-Patrick-Stewart-Picard.jpg',
            ratings: {},
            reviews: []
        }
    ]);
}
