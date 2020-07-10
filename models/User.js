const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true, selected: false},
        watchlists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Watchlist"
        }]
    }, {
        timestamps: true
    }
);

userSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret["password"];
        return ret;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;