/* ES5 */
var numbers=[10,20,30];
var sum =0;

for(var i=0; i<numbers.length; i++){
    sum += numbers[i];
}
/* ES6 */
var result=numbers.reduce(function(acc, number){
    return acc + number;
}, 0);   // 0은 초기값.


/* map vs reduce */
var myColors=[
    { color: 'black' },
    { color: 'red' },
    { color: 'gold' },
]

var mOnlyColors=myColors.map(function(myColor){
    return myColor.color;
})
console.log(mOnlyColors);

var rOnlyColors=myColors.reduce(function(acc, myColor){
    acc.push(myColor.color);
    return acc;
},[]);
console.log(rOnlyColors);
/* 실제로는 */
//올바르게 닫힌 괄호 () )(()) (()))
function isGoodParens(string){
    //reduce
    var array = string.split('');
    var result = array.reduce(function(acc, char){
        if(acc<0) {
            return acc;
        }
        if (char==='('){
            return ++acc;
        }else{
            return --acc;
        }
    },0)

    return result === 0;
}

console.log(isGoodParens('((()))'));
console.log(isGoodParens('((())))'));
console.log(isGoodParens(')((()))'));

/* 실습 1 */
var trips=[
    { distance: 34 },
    { distance: 10 },
    { distance: 100 },
]

var totalDistance=trips.reduce(function(acc, trip){
    return acc += trip.distance;
},0)

console.log(totalDistance);


/* 실습 2 */
var desks=[
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' },
]

var deskType=desks.reduce(function(acc, desk){
    acc[desk[Object.keys(desk)[0]]]++;
    return acc;
},{ sitting:0, standing:0})

console.log(deskType)

/* 실습 3 */

function unique(array){
    return array.reduce(function(acc, num){
        var is=acc.find(function(element){
            return element===num;
        })
        if(is === undefined){
            acc.push(num);
        }
        return acc;
    },[]).sort();
}

var numbers=[4,1,3,2,2,1,3,3,4,4,4];
unique(numbers); //1,2,3,4