/* ES5 */
function makeRequest(url, method){
    if(!method) method='GET';

    doSomething(method, url);
}

makeRequest('http://hphk.io');
makeRequest('http://hphk.io','GET');
makeRequest('http://hphk.io','POST');


/* ES6 */
function makeRequest(url, method='GET'){
    doSomething(method, url);
}

makeRequest('http://hphk.io');
makeRequest('http://hphk.io','GET');
makeRequest('http://hphk.io','POST');


/* 실습 */
function sum(a,b){
    if(a===undefined) a=0;
    if(b===undefined) b=0;
    return a+b;
}

function sum(a=0, b=0){
    return a+b;
}
const sum = (a=0, b=0) => a+b;


function addOffset(style){
    if(!style) style={};
    style.offset='10px';
    return style;
}

function addOffset(style={}){
    style.offset='10px';
    return style;
}