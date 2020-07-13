const db = require('../models');

// show route
const show = (req,res) => {
    db.Watchlist.findById(req.params.id, (err,foundWatchlist) => {
        if (err) console.log('Error in watchlist#show:', err);

        if (!foundWatchlist) return res.json({
            message: "Watchlist with provided ID not found"
        });

        res.status(200).json({watchlist: foundWatchlist});
    });
}

// update route
const update = (req,res) => {
    db.Watchlist.findById(req.params.id, (err, foundWatchlist) => {
        if (err) console.log('Error in watchlist#update:', err);

        if (!foundWatchlist) return res.json({
            message: "Watchlist with provided ID not found"
        });

        foundWatchlist.titles.push(req.body.title);
        foundWatchlist.save();

        res.json({message: "Success"});
    });
}

// exports
module.exports = {
    show,
    update,
}