const express =require('express');
const Joi=require('joi');
const app=express();
app.use(express.json()); //Json문자열이 오면 알아서 파싱. express.json() <= 미들웨어다.

const movies=[
    { id: 1, title: 'matrix'},
    { id: 2, title: 'tomorrow'},
    { id: 3, title: 'alien'},
    { id: 4, title: 'alien2'},
    { id: 5, title: 'alien3'},
]

app.get('/', (req,res) =>{
    res.send('happy hacking');
})

app.get('/:name',(req, res) => {
    res.send(`hi, ${req.params.name}`);
})

//CRUD
//CREATE READ UPDATE DELETE(DESTROY)
//POST   GET  PUT    DELETE
/* Restfull
- 주고자 하는 리소스의 이름 복수형으로 주는것이 관례.
 */

/* ex GET /api/movies */
app.get('/api/movies',(req,res)=>{
    res.send(movies);
})

/* ex GET /api/movies/1 */
app.get('/api/movies/:id',(req,res)=>{
    // const movie=movies.find((movie)=>{
    //     return movie.id === parseInt(id);
    //     // return movie.id == req.params.id;
    // });
    
    const movie=getMovie(movies, parseInt(req.params.id));

    if(!movie){
        res.status(404).send(`${req.params.id}에 해당하는 영화를 찾을 수 없습니다.`);
    }

    res.send(movie);
})


/* ex POSt /api/movies */
app.post('/api/movies',(req,res)=>{
    // const schema={
    //     title: Joi.string().min(2).required(),
    // }

    // const result=Joi.validate(req.body, schema);
    const { error } = validateMovie(req.body);
    
    if(result.error){
        // res.status(400).send(result.error.details[0].message);
        return res.status(400).send(result.error.message);
    }

    const movie={
        id: movies.length+1,
        title: req.body.title,
    };

    movies.push(movie);
    res.send(movie);
})


/* ex PUT /api/movies/1 */
app.put('/api/movies/:id',(req,res)=>{
    const movie=getMovie(movies, parseInt(req.params.id));
   
    if(!movie){
        return res.status(404).send(`${req.params.id}는 없다,`);
    }

    // const result=validateMovie(req.body);
    const {error}=validateMovie(req.body); //result.error 비 구조화(destructuring)
    // const schema={
    //     title: Joi.string().min(2).required(),
    // }
    // const result=Joi.validate(req.body, schema);
    // if(result.error){ 
    //     return res.status(400).send(`${result.error.message}`);  
    // }
    console.log(error);
    if(error){
        return res.status(400).send(`${error.message}`);  
    }
    movie.title=req.body.title;
    res.send(movie);
    
    // 밑에껀 좋지 못한 코드...
    // const idSchema={
    //     id: Joi.number().required(),
    // }
    // const titleSchema={
    //     title: Joi.string().min(2).required(),
    // }
    // const idResult=Joi.validate(req.params, idSchema);
    // const titleResult=Joi.validate(req.body, titleSchema);

    // if(idResult.error){
    //     if(titleResult.error){ 
    //         return res.status(400).send(`${idResult.error.message} \n ${titleResult.error.message}`);  
    //     }
    //     return res.status(400).send( idResult.error.message );
    // }
    
    // const updateIndex=movies.findIndex((movie)=>{
    //     return movie.id === req.params.id;
    // })

    // if(updateIndex < 0) return res.status(404).send(`${req.params.id}는 없는 인덱스입니다.`)
    // movies[updateIndex].title=req.body.title;
    // res.send(movies);
})


/* ex DELETE /api/movies/1 */
app.delete('/api/movies/:id',(req,res)=>{
    //필요없을 수도..
    // const schema={
    //     id: Joi.number().required(),
    // }
    // const result=Joi.validate(req.params, schema);
    // if(result.error){
    //     return res.status(400).send(result.error.message);
    // }

    //const 니까 안되.....ㅜㅠㅜ
    // movies=movies.filter((movie)=>{
    //     return movie.id !== parseInt(req.params.id);
    // })

    const movie=getMovie(movies, parseInt(req.params.id));

    if(movie) res.status(404).send(`${req.params.id}는 없는 것..`)
    const deleteIndex=movies.indexOf(movie);
    movies.slice(deleteIndex,1);
    res.send(movies);
})


function validateMovie(movie){
    const schema={
        title: Joi.string().min(2).required(),
    }
    return Joi.validate(movie, schema);
}
function getMovie(movies, id){
    const movie=movies.find((movie)=>{
        return movie.id === id;
        // return movie.id == req.params.id;
    });
    return movie;
}

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${[port]}`));