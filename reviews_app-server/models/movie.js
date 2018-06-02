const mongoose = require("mongoose");
const Rate = require("./rate");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  imdbRank: {
    type: String,
    required: true
  },
  imdbId: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  rates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rate"
  }]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
