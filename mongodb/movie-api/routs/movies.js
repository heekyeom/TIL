const { Movie, validate } = require("../models/movie");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

/**Router */
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.send(movies);
});
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(400).send(`Id not found`);

  res.send(movie);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let movie = new Movie(req.body);
  movie = await movie.save();
  res.send(movie);
});
router.patch("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.send(movie);
});
router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(400).send(`ID was not found`);

  res.send(movie);
});

module.exports = router;
