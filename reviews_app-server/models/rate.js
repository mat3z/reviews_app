const mongoose = require('mongoose');
const User = require('./user');
const Movie = require('./movie');

const rateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie"
  },
  rate: {
    type: Number,
    required: true
  }
});

const Rate = mongoose.model("Rate", rateSchema);

module.exports = Rate;