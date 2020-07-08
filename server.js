// imports
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json());

// connection
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});