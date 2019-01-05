const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  fetchAllMovies,
  fetchOneMovie,
  fetchRecommendedMovies
} = require("../handlers/movies");
const { fetchReviews } = require('../handlers/reviews');
const { rateMovie } = require("../handlers/rates");

router.get("/recommendedByReviews", fetchRecommendedMovies);
router.get("/recommendedByRates", fetchRecommendedMovies);
router.get("/all", fetchAllMovies);
router.get("/:movie_id", fetchOneMovie);
router.post("/:movie_id", rateMovie);
router.get('/:movie_id/reviews', fetchReviews);
module.exports = router;