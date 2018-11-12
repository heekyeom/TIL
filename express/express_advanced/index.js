const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const express = require("express");
const Joi = require("joi");
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const app = express();

console.log(app.get("env"));
console.log(app.get("debug"));
console.log(config.get("name"));
// console.log(`node_env:${process.env.NODE_ENV}`);
app.use(helmet());
// if(process.env.NODE_ENV === 'development'){
if (app.get("env") === "development") {
  // console.log(`mogan을 실행합니다.`);
  startupDebugger("morgan을 실행합니다.");
  app.use(morgan("dev")); //로깅하는 것. dev는 개발환경에서만 쓰겠다
  // dbDebugger('db connecting.');
}
app.use(express.json()); //Json문자열이 오면 알아서 파싱. express.json() <= 미들웨어다.
// app.use(function(req, res, next){
//     console.log('모든 요청이 올때마다 log를 남깁니다.');
//     next();//다음 미들웨어 함수로 넘김.
// });
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static("public"));
// app.use(function(req,res,next){
//     console.log('사용자 인증을 진행중입니다.');
//     next();
// });
app.use(auth);

app.set("view engine", "pug");
app.set("views", "./views"); //안해도됨. views는 default.

const movies = [
  { id: 1, title: "matrix" },
  { id: 2, title: "tomorrow" },
  { id: 3, title: "alien" },
  { id: 4, title: "alien2" },
  { id: 5, title: "alien3" }
];

app.get("/", (req, res) => {
    res.render('index',{       //pug로 보낼 객체
        title:"happy hacking",
        greeting:'may tou have happy hacking'
    });
//   res.send("happy hacking");
});

app.get("/:name", (req, res) => {
  res.send(`hi, ${req.params.name}`);
});

/* ex GET /api/movies */
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

/* ex GET /api/movies/1 */
app.get("/api/movies/:id", (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));

  if (!movie) {
    res
      .status(404)
      .send(`${req.params.id}에 해당하는 영화를 찾을 수 없습니다.`);
  }

  res.send(movie);
});

/* ex POSt /api/movies */
app.post("/api/movies", (req, res) => {
  // const { error } = validateMovie(req.body);

  // if(result.error){
  //     return res.status(400).send(result.error.message);
  // }

  // const movie={
  //     id: movies.length+1,
  //     title: req.body.title,
  // };

  // movies.push(movie);
  // res.send(movie);
  res.send(req.body);
});

/* ex PUT /api/movies/1 */
app.put("/api/movies/:id", (req, res) => {
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
app.delete("/api/movies/:id", (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));

  if (movie) res.status(404).send(`${req.params.id}는 없는 것..`);
  const deleteIndex = movies.indexOf(movie);
  movies.splice(deleteIndex, 1);
  res.send(movies);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(2)
      .required()
  };
  return Joi.validate(movie, schema);
}
function getMovie(movies, id) {
  const movie = movies.find(movie => {
    return movie.id === id;
  });
  return movie;
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${[port]}`));
