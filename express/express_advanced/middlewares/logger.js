function log(req, res, next){
    console.log('모든 요청이 올때마다 log를 남깁니다.');
    next();//다음 미들웨어 함수로 넘김.
}

module.exports=log;