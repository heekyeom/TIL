const express=require('express');
const router=express.Router();

router.get("/", (req, res) => {
    res.render('index',{       //pug로 보낼 객체
        title:"happy hacking",
        greeting:'may tou have happy hacking'
    });
});

router.get("/:name", (req, res) => {
  res.send(`hi, ${req.params.name}`);
});

module.exports=router;