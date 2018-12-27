const express = require('express');
const movieRouter = require('./routes/movie');

const app = express();
app.use(express.json());
app.use('/movie', movieRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`));
