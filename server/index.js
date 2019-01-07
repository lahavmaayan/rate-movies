const express = require('express');
const movieRouter = require('./routes/movie');
const { getConnection, mongoClient } = require('./DBConnection');
const endOfLine = require('os').EOL;

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
        console.error(
            `Failed to connect to the database.${endOfLine}${err.stack}`
        );
        process.exit(1);
    }
});

process.on('SIGINT', () => {
    if (mongoClient !== undefined) {
        mongoClient.close();
        console.log('disconncted from DB');
    }
    process.exit();
});
