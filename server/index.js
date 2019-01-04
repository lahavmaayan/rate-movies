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
