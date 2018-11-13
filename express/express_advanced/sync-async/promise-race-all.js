const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`fetching from bank1....`);
    const response = { bank: 1, delayed: false };
    resolve(!response.delayed);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`fetching from bank2....`);
    const response = { bank: 2, delayed: false };
    resolve(!response.delayed);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`fetching from bank3....`);
    const response = { bank: 3, delayed: false };
    resolve(!response.delayed);
  }, 3000);
});

let i=0;
while(i<3000000000){
    i++;
}



p1.then((delayed)=>{
    console.log(`${delayed} p1`);
});
p2.then((delayed)=>{
    console.log(`${delayed} p2`);
});
p3.then((delayed)=>{
    console.log(`${delayed} p3`);
});

// Promise.all([p1,p2,p3]).then(result=>console.log(result));

// Promise.race([p1,p2,p3]).then(result=>console.log(result));
