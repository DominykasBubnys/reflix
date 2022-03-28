const express = require("express");
const router = express.Router();
const moviesController = require("../controller/movie-controllers");

router.get("/movies", moviesController.GET_getMovies)
router.get("/movie/:movie_id", moviesController.GET_getMovieById)
router.post("/auth-library", moviesController.POST_getLibrary)
router.post("/library/add-movie", moviesController.POST_addToLibrary)
router.post("/library/remove-movie", moviesController.POST_removeLibraryMovie)
router.post("/secured/add-movie", moviesController.POST_addNewMovie);

module.exports = router;