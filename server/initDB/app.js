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
            description:
                "An elderly ex-serviceman and widower looks to avenge his best friend's murder by doling out his own form of justice.",
            categories: [
                { id: 53, name: 'Thriller' },
                { id: 80, name: 'Crime' },
                { id: 18, name: 'Drama' },
                { id: 28, name: 'Action' }
            ],
            reviews: [],
            ratings: {},
            tags: ['bechdelTest']
        },
        {
            id: 672,
            title: 'Harry Potter and the Chamber of Secrets',
            categories: [
                { id: 12, name: 'Adventure' },
                { id: 14, name: 'Fantasy' },
                { id: 10751, name: 'Family' }
            ],
            description:
                'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
            publishingYear: 2001,
            imageUrl:
                'https://image.tmdb.org/t/p/w342/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
            reviews: [],
            ratings: {},
            tags: ['bechdelTest', 'minorityRepresentation']
        },
        {
            id: 671,
            title: "Harry Potter and the Philosopher's Stone",
            imageUrl:
                'https://image.tmdb.org/t/p/w342/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg',
            description:
                "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
            categories: [
                { id: 12, name: 'Adventure' },
                { id: 14, name: 'Fantasy' },
                { id: 10751, name: 'Family' }
            ],
            reviews: [],
            ratings: {}
        },
        {
            id: 9740,
            title: 'Hannibal',
            categories: [
                { id: 80, name: 'Crime' },
                { id: 18, name: 'Drama' },
                { id: 53, name: 'Thriller' },
                { id: 27, name: 'Horror' }
            ],
            description:
                "After having successfully eluded the authorities for years, Hannibal peacefully lives in Italy in disguise as an art scholar. Trouble strikes again when he's discovered leaving a deserving few dead in the process. He returns to America to make contact with now disgraced Agent Clarice Starling, who is suffering the wrath of a malicious FBI rival as well as the media.",
            publishingYear: 2001,
            imageUrl:
                'https://image.tmdb.org/t/p/w342/v5wAZwRqpGWmyAaaJ8BBHYuNXnj.jpg',
            reviews: [],
            ratings: {},
            tags: ['minorityRepresentation']
        },
        {
            id: 114,
            title: 'Pretty Woman',
            categories: [
                { id: 10749, name: 'Romance' },
                { id: 35, name: 'Comedy' }
            ],
            description:
                'When a millionaire wheeler-dealer enters a business contract with a Hollywood hooker Vivian Ward, he loses his heart in the bargain.',
            publishingYear: 1990,
            imageUrl:
                'https://image.tmdb.org/t/p/w342/fgmdaCMxXClZm2ePteLzCPySB1n.jpg',
            reviews: [],
            ratings: {}
        },
        {
            id: 13475,
            title: 'Star Trek',
            description:
                'The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.',
            categories: [
                { id: 878, name: 'Science Fiction' },
                { id: 28, name: 'Action' },
                { id: 12, name: 'Adventure' }
            ],
            publishingYear: 1990,
            imageUrl:
                'https://image.tmdb.org/t/p/w342/xPihqTMhCh6b8DHYzE61jrIiNMS.jpg',
            ratings: {},
            reviews: []
        }
    ]);
}
