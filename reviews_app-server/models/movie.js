const mongoose = require("mongoose");
const User = require("./user");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  productionYear: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
