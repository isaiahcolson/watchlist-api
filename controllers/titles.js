const db = require('../models');

// root route
const index = (req,res) => {
    db.Title.find({}, (err, foundTitles) => {
        if (err) console.log('Error in titles#index:', err);

        if (!foundTitles) return res.json({
            message: 'No titles found in database.'
        })

        res.status(200).json({titles: foundTitles});
    });
}

// exports
module.exports = {
    index,
}