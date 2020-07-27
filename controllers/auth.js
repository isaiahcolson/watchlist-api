const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

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
                process.env.SECRET_KEY,
                {
                    expiresIn: '10d'
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

// account delete
const destroy = (req,res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) console.log('Error in users#destroy:', err);

        if (!deletedUser) return res.json({
            message: 'No user with matching ID found.'
        });

        res.status(200).json({message: 'Success'});
    });
}

// profile function for users account info
const profile = async (req,res) => {
    try {
        const foundUser = await db.User.findById(req.currentUser).populate("watchlists", "titles");

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
    destroy,
    profile,
}