const http =require('http');
const data={
    ceo : 'khk',
    director: 'heekyeom',
}
const server=http.createServer((req, res)=>{
    if( req.url === '/'){
        res.write('hi hello heekyeom');
        res.end();
    }
    else if( req.url ==='/api'){
        res.write(JSON.stringify(data));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');