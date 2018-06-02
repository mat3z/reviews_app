const express = require('express');
const router = express.Router();
//{mergeParams: true}
const { fetchAllMovies, fetchOneMovie } = require('../handlers/movies');

router.get('/all', fetchAllMovies);
router.get('/:movie_id', fetchOneMovie);
module.exports = router;