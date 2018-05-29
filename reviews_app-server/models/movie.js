const mongoose = require("mongoose");
const User = require("./user");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  imdbId: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
