const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi hello heekyeom");
});

app.get("api", (req, res) => {
  const date = {
    ceo: "khk",
    director: "heekyeom",
    intern: 'binsan'
  };
  res.send(data);
});

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
})

app.get('/api/posts/:year',(req,res)=>{
    res.send(req.query)
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
