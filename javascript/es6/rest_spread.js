/* Rest =나머지 */

const addNumbers=(a,b)=>{
    const numbers=[a,b];
    return numbers.reduce((acc, number)=>{
        return acc+=number;
    },0);
}

const addNumbers=(...numbers)=>{
    return numbers.reduce((acc, number)=>{
        return acc+=number;
    },0);
}


/* spread = 펼치다 */

let defaultColors=['red', 'green', 'blue'];
let myColors=['orange','navy','gold'];
let iphoneColors=['space gray','rose gold']
defaultColors.concat(myColors);
palette=[...defaultColors, ...myColors, ...iphoneColors];


/* 실습 */
const showShoppingList=(...items)=>{  //rest
    if(items.indexOf('milk') < 0){
        return ['milk',...items];  //spread
    }
}

/* 실제.. */
let MathLibrary={
    calculateProduct(a,b){
        return a*b;
    }
}

let MathLibrary={
    multiply(a,b){
        return a*b;
    },

    calculateProduct(...agrs){
        console.log('please use method "multiply" instead :)');
        return this.multiply(...agrs);
    }
}

MathLibrary.calculateProduct(10,10); 
/* 
multiply(a,b){
        return a*b;
    },

    calculateProduct([10,10]){
        console.log('please use method "multiply" instead :)');
        return this.multiply(10,10);
    }
*/

/* 실습 */
const join=(array1, array2) => {
    return array1.concat(array2);
}
const join=(array1, array2) => {
    return [...array1, ...array2];
}


const unshift=(array,a,b,c,d,e)=>{
    return [a,b,c,d,e].concat(array);
}
const unshift=(array, ...args)=>{
    return [...args, ...array];
}