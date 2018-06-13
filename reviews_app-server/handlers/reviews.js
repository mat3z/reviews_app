const db = require("../models");

exports.fetchReviews = async function(req, res, next) {
  try {
    let movie = await db.Movie.findById(req.params.movie_id).populate({
      path: 'rates',
      // populate: {
      //   path: 'movie user'
      // }
      populate: {
        path: 'user'
      }
    });

  } catch (err) {
    return next(err);
  }
};