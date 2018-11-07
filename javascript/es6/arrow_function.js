/* ES5 */
var add=function(a,b){
    return a+b;
}
add(1,2);


/* ES6 */
/* 사실 Arrow function과 일반 function은 같지 않다. */
let multiply=function(a,b){
    return a*b;
}

multiply=(a,b) => {
    return a*b;
}

multiply=(a,b) => a*b

let double = (number) => number * 2;
double = number => number * 2; //parameter가 하나이면 괄호 생략 가능.

