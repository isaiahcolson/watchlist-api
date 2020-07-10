const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema ({
    name: {type: String, required: true},
    titles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Title"
    }]
});

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);

module.exports = Watchlist;