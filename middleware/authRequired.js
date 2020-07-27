// imports
const jwt = require('jsonwebtoken');
require("dotenv").config();

// function for back end user auth
module.exports = async (req,res,next) => {
    if (req.headers["authorization"]) {
        const token = req.headers["authorization"].split(" ")[1];
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        req.currentUser = payload._id;
        next();
    } else {
        res.sendStatus(403);
    }
}