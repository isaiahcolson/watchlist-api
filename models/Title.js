// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// title model, these are movies or shows
const titleSchema = new Schema({
    name: String,
    rating: Number,
    releaseYear: Number,
    mpaaRating: String,
    timeLength: String,
    mediaType: String,
    posterImage: String,
    coverImage: String,
    genres: Array,
    storyline: String
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;