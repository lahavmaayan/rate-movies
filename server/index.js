const express = require('express');
const movieRouter = require('./routes/movie');
require('./db')();

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello world from Express!!');
});

app.use('/api/movie', movieRouter);
app.use(clientErrorHandler);

app.get('/api/search', (req, res) => {
    res.json({
        movies: [
            {
                id: 0,
                name: 'Titanic',
                director: 'Yama Anin',
                rating: 10,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
            },
            {
                id: 1,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 2,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 3,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 4,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 5,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 6,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 7,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 8,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 9,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
            {
                id: 10,
                name: 'Shalom',
                director: 'Another Name',
                rating: 5,
                pictureUrl:
                    'https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            }
        ]
    });
});

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`listening on port ${port}....`);
});

function clientErrorHandler(err, req, res, next) {
    res.status(500).json({ error: err });
    next(err);
}
