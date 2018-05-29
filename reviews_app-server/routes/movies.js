const express = require('express');
const router = express.Router();
//{mergeParams: true}
const { fetchMovies } = require('../handlers/movies');

router.get('/all', fetchMovies);

module.exports = router;