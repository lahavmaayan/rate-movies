const express = require('express');
const movieRouter = require('./routes/movie');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});
app.get('/', (req, res) => {
    res.send('Hello world from Express!!');
});

app.use('/movie', movieRouter);

app.get('/InitDB', async function(req, res) {
    try {
        const movieDB = require('./models/movieRepo');
        await movieDB.initDB();
        res.status(200).send('InitDB');
    } catch (error) {
        res.status(500).send();
    }
});
