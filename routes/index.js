const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find({}).then((moviesFromDB) => res.render("movies", { moviesFromDB }));
});

//last line of code always
module.exports = router;
