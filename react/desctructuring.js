/* es5 */
var computer={
    model: 'LG gram',
    year: 2017,
}

var model=computer.model;
var year=computer.year;

/* es6 */
const laptop={
    model: 'Macbook Air',
    year: 2018,
}

const { model }=laptop; // 변수의 이름이 key값과 같아야 한다.
const { year }=laptop;
const { model, year }=laptop; // 변수의 이름이 key값과 같아야 한다.

/* es5 function */
var savedFile={
    extension:'jpg',
    name: 'profile',
    size: 29876
}

function fileSummary(file){
    return `The file ${file.name}.${file.extension}의 크기는 ${file.size} 입니다.`;
}
console.log(fileSummary(savedFile));
/* es6 function */
const myFile={
    extension:'jpg',
    name: 'profile',
    size: 29876
}
function fileSummary({name, extension, size}){
    return `The file ${name}.${extension}의 크기는 ${size} 입니다.`;
}
console.log(fileSummary(myFile));

/* es6 Array */
const companies=['Google','IBM','Amazon','Apple'];
const [ name ]=companies;
const [ name1, name2, name3 ]=companies;

let firstCompany=companies[0];
[ firstCompany ]=companies;

// const length  = companies.length;
const { length } = companies;  //length => 4

const [ one, ...rest ]=companies; //one => google, rest = 나머지들...

/* Array & Object */
const wannaGo = [
    { name: 'google', location: 'Mountain View' },
    { name: 'facebook', location: 'Menlo Park' },
    { name: 'apple', location: 'Cupertino' },
];

let [ company ]=wannaGo;
let [ { location } ]=wannaGo; // Mountain View

/* 실제 개발에서는? */
const points=[
    [7, 12],
    [-20, 3],
    [8, 0]
]

const pointMap=points.map(pair =>{
    // const x=pair[0];
    // const y=pair[1];
    const [ x, y ]=pair;
    return { x: x, y: y };
})
const pointMap=points.map(([ x, y ]) =>{
    // const x=pair[0];
    // const y=pair[1];
    // const [ x, y ]=pair;
    return { x, y };
})


function signup ( {username, password, email} ){

}

const user={
    username: 'heek',
    password: '123123',
    email: 'hhhahhhha'
}

signup(user);

/* 실습1 */
const profile={
    title: 'Engineer',
    department: 'Blockchain'
};

function isEngineer({ title, department }){
    return title === 'Engineer' && department === 'Blockchain';
}

/* 실습2 */
const classes=[
    ['실전 dapp', '9am', 'mr.john'],
    ['react','1pm','neo'],
    ['capstone','3pm','multicampus']
]

classes.map( ([subject, time, teacher]) =>{
    return {subject, time, teacher};
})


/* 실습1 */