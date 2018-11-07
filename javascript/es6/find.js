/* ES5 */
var users=[
    { name: 'Tony Stark'},
    { name: 'Steve Rogers'},
    { name: 'Thor'},
]

var user;
for(var i=0; i<users.length; i++){
    if(users[i].name === 'Thor'){
        user=users[i];
        break;
    }
}
console.log(user);

/* ES6 */
var user = users.find(function(user){
    return user.name==='Tony Stark'
})

console.log(user)


/* More complex code */

function Car(model){
    this.model=model;
}
var cars=[
    new Car('Mercedes'),
    new Car('Ferrari'),
    new Car('BMW'),
    new Car('HK'),
];

var car = cars.find(function(car){
    return car.model==='Mercedes';
})
console.log(car);

/* 실제로는 */
const articles=[
    { id: 1, title: 'Motto', content: 'HappyHacking'},
    { id: 2, title: 'Motto', content: 'HappyHacking'},
    { id: 3, title: 'Motto', content: 'HappyHacking'},
    { id: 4, title: 'Motto', content: 'HappyHacking'},
]
const articleId=getIdFronURL();
const article

/* 실습 1 */
var users=[
    { id: 1, admin: false},
    { id: 2, admin: false},
    { id: 3, admin: true},
]

var admin=users.find(function(user){
    // return user.admin === true;
    return user.admin;
});

console.log(admin);


/* 실습 2 */

var accounts=[
    { balance: -10},
    { balance: 12},
    { balance: 0},
]

var account=accounts.find(function(account){
    return account.balance === 12
})

/* 실습 3 */

var laders=[
    { id: 1, height: 20},
    { id: 3, height: 25},
]

function findWhere(array, standard){
    var key=Object.keys(standard)[0];
    return array.find(function(element){
        return element[key] === standard[key];
    })
}

var lader=findWhere(laders, {height: 20})
console.log(lader);