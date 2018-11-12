const express = require("express");
const router = express.Router();
const Joi=require('joi');

const movies = [
  { id: 1, title: "matrix" },
  { id: 2, title: "tomorrow" },
  { id: 3, title: "alien" },
  { id: 4, title: "alien2" },
  { id: 5, title: "alien3" }
];

/* ex GET /api/movies */
router.get("/", (req, res) => {
  res.send(movies);
});

/* ex GET /api/movies/1 */
router.get("/:id", (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));

  if (!movie) {
    res.status(404).send(`${req.params.id}에 해당하는 영화를 찾을 수 없습니다.`);
  }

  res.send(movie);
});

/* ex POSt /api/movies */
router.post("/", (req, res) => {
  res.send(req.body);
});

/* ex PUT /api/movies/1 */
router.put("/:id", (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));

  if (!movie) {
    return res.status(404).send(`${req.params.id}는 없다,`);
  }
  const { error } = validateMovie(req.body);

  console.log(error);
  if (error) {
    return res.status(400).send(`${error.message}`);
  }
  movie.title = req.body.title;
  res.send(movie);
});

/* ex DELETE /api/movies/1 */
router.delete("/:id", (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));

  if (movie) res.status(404).send(`${req.params.id}는 없는 것..`);
  const deleteIndex = movies.indexOf(movie);
  movies.splice(deleteIndex, 1);
  res.send(movies);
});
function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required()
  };
  return Joi.validate(movie, schema);
}
function getMovie(movies, id) {
  const movie = movies.find(movie => {
    return movie.id === id;
  });
  return movie;
}

module.exports=router;
