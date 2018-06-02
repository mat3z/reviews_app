const db = require("../models");

exports.fetchAllMovies = async function(req, res, next) {
  try {
    let movies = await db.Movie.find();
    return res.status(200).json(movies)
  } catch (err) {
    return next(err);
  }
};

exports.fetchOneMovie = async function(req, res, next) {
  try {
    let movie = await db.Movie.findById(req.params.movie_id);
    return res.status(200).json(movie);
  } catch (err) {
    return next(err);
  }
};