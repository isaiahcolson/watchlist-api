const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/watchlist";
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

module.exports = {
    Title: require('./Title'),
}