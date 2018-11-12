const promise=new Promise((resolve, reject)=>{
    const number=Math.floor(Math.random()*100);
    if(number % 2 === 1){
        resolve({ id: 1, email: 'khk2870@gmail.com'});
    }
    else {
        reject(new Error('error....'));
    }
});

promise
.then( user => console.log(user))
.catch(error => console.error(error));