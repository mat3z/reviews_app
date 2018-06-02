const express = require('express');
const router = express.Router({mergeParams: true});

const { fetchAllMovies, fetchOneMovie } = require('../handlers/movies');
const { rateMovie } = require('../handlers/rates');

router.get('/all', fetchAllMovies);
router.get('/:movie_id', fetchOneMovie);
router.post('/:movie_id', rateMovie);
module.exports = router;