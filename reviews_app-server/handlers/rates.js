const db = require('../models');

exports.rateMovie = async function(req, res, next) {
  try {
    let rate = await db.Rate.create({
      rate: Number(req.body.rate),
      movie: req.params.movie_id,
      user: req.params.user_id
    });
    let foundMovie = await db.Movie.findById(req.params.movie_id);
    foundMovie.rates.push(rate._id);
    console.log(foundMovie);
    await foundMovie.save();

    let foundUser = await db.User.findById(req.params.user_id);
    foundUser.rates.push(rate._id);
    await foundUser.save();

    let foundRate = await db.Rate.findById(rate.id)
      .populate('user', { username: true })
      .populate('movie', { title: true });

    console.log(foundRate);
    return res.status(200).json(foundRate);
  } catch (err) {
    return next(err);
  }
};

