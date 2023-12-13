// MoviesModel.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
