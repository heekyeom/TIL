const movies=require('./routes/movies');
const home=require('./routes/home')
const debug = require("debug")("app:startup");
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
// console.log(`node_env:${process.env.NODE_ENV}`);

app.use(helmet());
if (app.get("env") === "development") {
  debug("morgan을 실행합니다.");
  app.use(morgan("dev"));
}
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static("public"));
app.use(auth);
app.use(home);
app.use('/api/movies',movies);

app.set("view engine", "pug");
app.set("views", "./views"); 


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${[port]}`));
