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

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`listening on port ${port}....`);
});

function clientErrorHandler(err, req, res, next) {
    res.status(500).json({ error: err });
    next(err);
}
