// imports
const jwt = require('jsonwebtoken');

// function for back end user auth
module.exports = async (req,res,next) => {
    if (req.headers["authorization"]) {
        const token = req.headers["authorization"].split(" ")[1];
        const payload = await jwt.verify(token, "rubberduckig11");
        req.currentUser = payload._id;
        next();
    } else {
        res.sendStatus(403);
    }
}