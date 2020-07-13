const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register function for new users
const register = async (req,res) => {
    try {
        const foundUser = await db.User.findOne({username: req.body.username});

        if (foundUser)
            return res.status(400).json({
                status: 400,
                message: "Username has already been taken, please try again."
            });
        const watchlist = await db.Watchlist.create({name: "Default"});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({...req.body, password:hash, watchlists: [watchlist._id]});
        
        return res
            .status(201)
            .json({status: 201, message: "Success", createdUser});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong, please try again."
        });
    }
}

// login function for returning users
const login = async (req,res) => {
    try {
        const foundUser = await db.User.findOne({username: req.body.username}).select("+password");

        if (!foundUser) {
            return res.status(400).json({
                status:400,
                message: "Username or password is incorrect"
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
        if (isMatch) {
            const signedJwt = await jwt.sign(
                { _id: foundUser._id},
                'rubberduckig11',
                {
                    expiresIn: '1h'
                }
            );
            res.status(200).json({
                status:200,
                message: "Success",
                token: signedJwt
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Username or password is incorrect"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong, please try again."
        });
    }
}

// profile function for users account info
const profile = async (req,res) => {
    try {
        const foundUser = await db.User.findById(req.currentUser);

        res.json({headers: req.headers, user:foundUser});
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong, please try again"
        });
    }
}

// exports
module.exports = {
    register,
    login,
    profile,
}