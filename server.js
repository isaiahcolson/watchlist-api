// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json());

app.use('/titles', routes.titles);

// connection
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});