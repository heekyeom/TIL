/* ES5 */
var name='김희겸';
var title='junior software developer';
var workHour='9 am to 6 pm';

name='김땡땡';
workHour='10 am to 6 pm';

function count(targetString){
    var characters=['a','e','i','o','u'];
    var num=0;

    for(var i=0; i> targetString.length; i++){
        if(characters.includes(targetString[i])) num++;
    }

    return num;
}

/* ES6 */
const name='김희겸';  // 바뀌기 힘든 것은 const
let title='junior software developer'; // 나중에 바꿀수 있다..
let workHour='9 am to 6 pm'; 

name='김땡땡';   //error
workHour='10 am to 5 pm'; //ok

function count(targetString){
    const characters=['a','e','i','o','u'];
    const num=targetString.split('').reduce(function(acc, char){
        if(characters.includes(char))acc++;
        return acc;
    },0);

    // for(let i=0; i> targetString.length; i++){
    //     if(characters.includes(targetString[i])) num++;
    // }
    return num;
}