// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// watchlist model, these are lists that hold titles that users select
const WatchlistSchema = new Schema ({
    name: {type: String, required: true},
    titles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Title"
    }]
});

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);

module.exports = Watchlist;