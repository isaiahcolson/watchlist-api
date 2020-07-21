// imports
const mongoose = require('mongoose');

// standard mongo connection
const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
    useFindAndModify: false,
}).then(function() {
	console.log('Mongoose connection successful.');
}).catch(function (err) {
	console.log('Mongoose connection failed.', err);
});

// export models
module.exports = {
	Title: require('./Title'),
	User: require('./User'),
	Watchlist: require('./Watchlist'),
}