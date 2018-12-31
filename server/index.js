const express = require('express');
const movieRouter = require('./routes/movie');

const app = express();
app.use(express.json());

app.use('/movie', movieRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`));

app.get('/', function(req, res) {
    res.send('Hello world from Express!!');
});

app.use('/api', function(req, res) {
    res.status(200).send('Hello world from Express api!!');
});
