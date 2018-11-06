/* ES5 for() */
var colors=['red','blue','green'];

for(var i=0; i<colors.length; i++){
    console.log(colors[i]);
}

/* ES6 for() */
colors.forEach(function(color){
    console.log(color)
});


var numbers=[1,2,3,4,5];
var sum=0;

// numbers.forEach(function(number){
//     sum+=number;
// });
function add(number){
    sum+=number;
}
numbers.forEach(add);
console.log(sum);

/* in real world */
spamMails=[];
function deleteMail(spamMail){
};

spamMails.forEach(function(spamMail){
    deleteMail(spamMail);
});


/* 실습 1 */
var posts=[
    {id: 23, title:"daily"},
    {id: 52, title:"code"},
    {id: 105, title:"commit"}
]

function savepost(post){
    post;
};

posts.forEach(function(post){
    savepost(post);
});


/*실습 2 */
var images=[
    {height:10, width: 30},
    {height:20, width: 90},
    {height:30, width: 32}
]
var areas=[];

images.forEach(function(image){
    areas.push(image.height*image.width);
})
console.log(areas);
