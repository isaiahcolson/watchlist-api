const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
    try {
        const foundUser = await db.User.findOne({username: req.body.username});

        if (foundUser)
            return res.status(400).json({
                status: 400,
                message: "Username has already been taken, please try again."
            });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({...req.body, password:hash});

        return res
            .status(201)
            .json({status: 201, message: "Success", createdUser});
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong, please try again."
        });
    }
}

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
            // TODO
        } else {
            return res.status(400).json({
                status: 400,
                message: "Username or password is incorrect"
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong, please try again."
        });
    }
}

module.exports = {
    register,
    login,
}