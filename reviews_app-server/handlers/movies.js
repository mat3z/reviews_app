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
    let movie = await db.Movie.findById(req.params.movie_id).populate({
      path: 'rates',
      // populate: {
      //   path: 'movie user'
      // }
      populate: {
        path: 'user'
      }
    });

    let user = await db.User.findById(req.params.user_id);
    let alreadyRated = false;

    // let arr = movie.rates.map((rate, index) => rate.user.username === user.username ? rate.rate : false);
    let rateGiven = 0;
    for (rate of movie.rates) {
      alreadyRated = rate.user.username === user.username;
      rateGiven = alreadyRated ? rate.rate : 0;
    }

    console.log(alreadyRated, rateGiven);
    console.log(user.username);
    // console.log(movie.rates[0].user.username);
    // console.log(movie.rates[0]);

    let { _id, year, imdbId, title, imageUrl, imdbRank, rates } = movie.toObject();
    let moviesInfo = {
      _id,
      year,
      imdbId,
      imageUrl,
      title,
      imdbRank,
      rates: rates.map(rate => ({
        user: rate.user.username,
        rate: rate.rate,
        movie: rate.movie.title
      })),
      alreadyRated,
      rateGiven
    };

    return res.status(200).json(moviesInfo);
  } catch (err) {
    return next(err);
  }
};