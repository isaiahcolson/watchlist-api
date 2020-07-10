// imports
const db = require('../models');

// root route
const index = (req,res) => {
    db.Title.find({}, (err, foundTitles) => {
        if (err) {
            console.log('Error in titles#index:', err);
            return res.status(500).json({message: "Error, please try again."});
        }

        if (!foundTitles.length) {
            return res.status(200).json({message: 'No titles found in database.'});
        }

        res.status(200).json({titles: foundTitles});
    });
}

// show route
const show = (req,res) => {
    db.Title.findById(req.params.id, (err, foundTitle) => {
        if (err) {
            console.log('Error in titles#show:');
        }

        if (!foundTitle) {
            return res.json({message: 'Title with provided ID not found'});
        }

        res.status(200).json({title: foundTitle});
    });
}

// exports
module.exports = {
    index,
    show,
}