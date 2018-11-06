/* ES5 map() */
var numbers=[1,2,3];
var dNumbers=[];

for(var i=0; i<numbers.length; i++){
    dNumbers.push(numbers[i]*2);
}

/* ES6 map() */
var tNumbers=numbers.map(function(number){
    return number*3;
})

/* 실제노는? */
var posts=[
    {title:'happy', content:'hacking'},
    {title:'hello', content:'world'},
    {title:'multi', content:'campus'}
]

var frontElement=posts.map(function(post){
    return `<h1>${post.title}</h1><p>${post.content}</p>`
})

/* 실습 1 */
var images=[
    {h: '10px', w:'20px'},
    {h: '20px', w:'20px'},
    {h: '30px', w:'20px'},
]

var heights=images.map(function(image){
    return image.h;
});
console.log(heights);

/* 실습 2 */
var trips=[
    {distance : 34, time: 1 },
    {distance : 340, time: 2 },
    {distance : 100, time: 2 },
]

var speeds=trips.map(function(trip){
    return trip.distance/trip.time;
})

console.log(speed);

/* 실습 3 */
function pluck(array, property){
    return array.map(function(paint){
        return paint[property];
    });
}

var paints=[
    {color:'red', price:100},
    {color:'white', price:200},
    {color:'brown', price:200},
    {color:'navy', price:100},
]

console.log(pluck(paints, 'color'));
console.log(pluck(paints, 'price'));