/* ES5 */
var products=[
    {name:'banana', type:'fruit'},
    {name:'carrot', type:'vegetable'},
    {name:'apple', type:'fruit'},
    {name:'aggplant', type:'vegetable'},
]

var fruits=[];
for(var i=0; i<products.length; i++){
    if(products[i].type==='fruit'){
        fruits.push(products[i]);
    }
}

/* ES6 */
var vegetables=products.filter(function(product){
    return product.type==='vegetable';
});
console.log(vegetables);



/* 실제로는 */


/* 실습 1  */
var numbers=[1,2,3,45,10,40];
var bigNumbers=numbers.filter(function(number){
    return number>10;
})
console.log(bigNumbers);

/* 실습 2 */
var users=[
    {id:1, admin: true},
    {id:2, admin: false},
    {id:3, admin: false},
    {id:4, admin: true},
]

var admins=users.filter(function(user){
    // return user.admin===true;
    return user.admin;
})
// var admins=users.filter(user => user.admin);

console.log(admins);

/* 실습 3 */
var numbers=[10,20,30];

function reject(array, iterFunction){
    // var noRejcts = array.filter(iterFunction);
    
    // noRejects.forEach(noRejct => {
    //     array.pop(noRejct);
    // });

    // return array;
    return array.filter(function(e){
        return !iterFunction(e);
    });
}

var lessThan15=reject(numbers, function(number){
    return number>15;
})

console.log(lessThan15);