const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieController');

// Define routes for fetching movies, ratings, etc.
router.get('/movies', MovieController.getAllMovies);
router.post('/movies/rate', MovieController.rateMovie);
// Add other movie-related routes

module.exports = router;
