// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// config
const app = express();
const PORT = process.env.PORT;

// middleware
const options = {
    origin: ["https://isaiahcolson-watchlist.herokuapp.com"]
}

app.use(express.json());
app.use(cors(options));

// routes
app.use('/titles', routes.titles);
app.use('/auth', routes.auth);
app.use('/watchlists', routes.watchlists);

// connection
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});