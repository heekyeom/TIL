/* ES 5 */
var computers=[
    { name: 'macbook-air', ram: 16},
    { name: 'gram', ram: 8},
    { name: 'series9', ram: 32},
]

var everyComputersAvailable=true;
var someComputersAvailable=false;

for(var i=0; i < computers.length; i++){
    var computer = computers[i];
    if(computer.ram < 16){
        everyComputersAvailable=false;
    }else{
        someComputersAvailable=true;
    }
}
/* ES 6 */
var everyLabtopAvailable=computers.every(function(computer){
    return computer.ram > 16;
});
var someLabtopAvailable=computers.some(function(computer){
    return computer.ram > 16;
});

/* 실제로는 */



/* 실습 1 */
var users=[
    { id: 21, submit: true},
    { id: 33, submit: false},
    { id: 712, submit: true},
]

var allSubmited=users.every(function(user){
    return user.submit;
});

console.log(allSubmited);

/* 실습 2 */
var requests=[
    { url: '/photos', status: 'complete'},
    { url: '/albums', status: 'pending'},
    { url: '/users', status: 'failed'},
]

var inProgress=requests.some(function(request){
    return request.status === 'pending';
})

console.log(inProgress);
/* 실습 3 */