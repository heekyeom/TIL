const genres=require('./routs/genres')
const movies=require('./routs/movies')
const mongoose=require('mongoose');
const express = require("express");
const app = express();

mongoose.connect('mongodb://localhost/video-api',{useNewUrlParser: true})
.then(()=>console.log(`connected to mongodb`))
.catch(error=>console.error(error));

/**Middlewares */
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/movies',movies);


/**Server */
const port=process.env.PORT||3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));


