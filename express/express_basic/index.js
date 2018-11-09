const express =require('express');
const app=express();
app.use(express.json()); //Json문자열이 오면 알아서 파싱.

const movies=[
    { id: 1, title: 'matrix'},
    { id: 2, title: 'tomorrow'},
    { id: 3, title: 'alien'},
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
    const movie=movies.find((movie)=>{
        return movie.id === parseInt(req.params.id);
        // return movie.id == req.params.id;
    });

    if(!movie){
        res.status(404).send(`${req.params.id}에 해당하는 영화를 찾을 수 없습니다.`);
    }
    res.send(movie);
})


/* ex POSt /api/movies */
app.post('/api/movies',(req,res)=>{
    const movie={
        id: movies.length+1,
        title: req.body.title,
    };

    movies.push(movie);
    res.send(movie);
})


/* ex PUT /api/movies/1 */
app.put('/api/movies/aaa',(req,res)=>{
    
})


/* ex DELETE /api/movies/1 */
app.delete('/api/movies/aaa',(req,res)=>{
    
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${[port]}`));