const express = require('express');
const movieRouter = require('./routes/movie');
const { getConnection } = require('./DBConnection');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world from Express!!');
});

app.use('/movie', movieRouter);

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`listening on port ${port}....`);
    try {
        await getConnection();
        console.log('Connected to DB');
    } catch (err) {
        console.error(`Failed to connect to the database. ${err.stack}`);
    }
});
