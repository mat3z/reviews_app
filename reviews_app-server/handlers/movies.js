const db = require("../models");

exports.fetchMovies = async function(req, res, next) {
  try {
    let movies = await db.Movie.find();
    return res.status(200).json(movies)
  } catch (err) {

  }
};

exports.rateMovie = async function(req, res, next) {};
