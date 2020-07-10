// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// config
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
const options = {
    origin: ["http://localhost:3000"]
}

app.use(cors(options));
app.use(express.json());

// routes
app.use('/titles', routes.titles);
app.use('/auth', routes.auth);

// connection
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});