const express = require("express");
const router = express.Router();
const moviesController = require("../controller/movie-controllers");

router.get("/movies", moviesController.GET_getMovies)
router.get("/movie/:movie_id", moviesController.GET_getMovieById)
router.post("/secured/add-comment", moviesController.POST_addComment);
router.post("/secured/add-movie", moviesController.POST_addNewMovie);

module.exports = router;