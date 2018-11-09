const fs=require('fs');
const path=require('path');
const express=require('express');
const Joi=require('Joi');
const app=express();
app.use(express.json());

const tmpusers=[
    { id: 1, name: "임나영", email: "im@im.com", age:21},
    { id: 2, name: "김소혜", email: "so@so.com", age:20},
    { id: 3, name: "조보아", email: "cho@cho.com", age:29},
];

//Create
app.post('/api/users',(req,res)=>{
    const { error }=validateUser(req.body);
    if(error){
        return res.status(400).send(error.message);
    }

    // const user={
    //     name: req.body.name,
    //     email: req.body.email,
    //     age: req.body.age
    // }
    // const users=readUsers();
    // users.push(user);
    writeUsers(req.body, res);

    //users.push(user)
});

//Read
app.get('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=getUser(id);
    
    if(!user) return res.status(404).send(`${id}는 찾을 수 없습니다.`);

    res.send(user);
});
//read all
app.get('/api/users',(req,res)=>{
    const users=readUsers(res);
    console.log(users);
});

//Update
app.put('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=getUser(id);
    if(!user) return res.status(404).send(`${id}는 찾을 수 없습니다.`);

    const { error }=validateUser(req.body);
    if(error) return res.status(400).send(error.message);

    user.name=req.body.name;
    user.email=req.body.email;
    user.age=req.body.age;

    res.send(user);
});

//Delete
app.delete('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=getUser(id);
    if(!user) return res.status(404).send(`${id}는 찾을 수 없습니다.`);

    const deleteIndex=users.indexOf(user);
    users.splice(deleteIndex,1);
    res.send(JSON.stringify(user));
});

function readUsers(res){
    fs.readFile(path.join(__dirname,'users.json'),{encoding: 'utf8'},(err,data)=>{
        if(err) return console.log(`error writng to users.json file`);
        res.send(data);
    });
};

function writeUsers(user,res){
    fs.readFile(path.join(__dirname,'users.json'),{encoding: 'utf8'},(err,data)=>{
        if(err) return console.log(`error writng to users.json file`);
        let obj=JSON.parse(data);

        console.log(data);
        console.log('==========================');
        console.log(obj);
        const tmp={
            id: obj.users.length+1,
            name: user.name,
            email: user.email,
            age: user.age
        }

        obj.users.push(tmp);

        fs.writeFile(path.join(__dirname,'users.json'),JSON.stringify(obj),(err)=>{
            if(err) return console.log(`error writng to users.json file`);
            res.send(tmp);
        });
    });
};
function validateUser(user){
    const scheme={
        name: Joi.string().min(1).required(),
        email:Joi.string().min(5).required(),
        age:Joi.number().min(3),
    }

    return Joi.validate(user, scheme);
}

function getUser(id){
    const user=users.find((user)=>user.id === id);
    return user;
}

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));