// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// title model, these are movies or shows
const titleSchema = new Schema({
    name: String,
    releaseYear: Number,
    mediaType: String,
    rating: Number,
    coverImage: String,
    genres: Array
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;