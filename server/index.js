const express = require('express');
const movieRouter = require('./routes/movie');
require('./db')();

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello world from Express!!');
});

app.use('/api/movie', movieRouter);

app.get('/api/search', (req, res) => {
    res.json({movies:[
        {id: 0, name: "Titanic", director: "Yama Anin"},
        {id: 1, name: "Shalom", director: "Another Name"}
    ]})
});


const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`listening on port ${port}....`);
});
