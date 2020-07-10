const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema ({
    name: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);

module.exports = Watchlist;