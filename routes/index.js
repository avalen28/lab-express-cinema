const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* Movies page */
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((moviesFromDB) => res.render("movies", { moviesFromDB }))
    .catch((err) => next(err));
});

/* Movie details page */
router.get("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId).then(
    (movieFromDB) =>
      res.render(
        "movie-detail",
        movieFromDB
      ) /*no se pone curly porque al ser 1 sólo ya es un obj. */
  );
});

//last line of code always
module.exports = router;
