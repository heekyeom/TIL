const _ = require('underscore');
const http=require('http');

function getLottoData(drwNo){
    const url=`http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
    return new Promise((resolve, reject)=>{
        http.get(url, res=>{
            let buff='';
            res.on('data',chunk => {
                buff+=chunk;
            });
    
            res.on('end', ()=>{
                resolve(JSON.parse(buff));
            })
        })
    })
}

function findLuckNumbers(lottoData={}){
    let cnt=0;
    let isBnus=false;

    for(const [key, value] of Object.entries(lottoData)){
        if(key==='bnusNo'){
            if(myNumbers.find(num=>num===value)) isBnus=true;
        }else if(key.match('drwtNo')){
            if(myNumbers.find(num=>num===value)) cnt++;
        }
    }

    if(cnt === 6) console.log(`1등`);
    else if(cnt ===5){
        if(isBnus) return console.log(`2등`);
        console.log(`3등`);
    }else if(cnt ===4){
        console.log(`4등`);
    }else if(cnt ===3){
        console.log(`5등`);
    }else if(cnt ===2){
        console.log(`6등`);
    }
}


const numbers=_.range(1,46);
const myNumbers=_.sample(numbers,6).sort();
console.log(myNumbers);

getLottoData(831).then((lottoData)=>{
    findLuckNumbers(lottoData);
});
