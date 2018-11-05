// 1. <input> 태그 안의 값을 잡는다.
const button=document.querySelector('#js-button');
const inputArea=document.querySelector('#js-input');

button.addEventListener('click',()=>{
    const inputValue=document.querySelector('#js-input').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keyup',(e)=>{
    // if(e.key==='Enter'){
    //     const inputValue=document.querySelector('#js-input').value;
    //     pushToDOM(inputValue);
    // }
    if(e.which===13){
        const inputValue=document.querySelector('#js-input').value;
        pushToDOM(inputValue);
    }
})
// 2. API를 활용하여 data를 받는다. 그리고 가공한다.


// 3. gif 파일들은 index.html에 밀어 넣는다.

const pushToDOM=(data) => {
    const resultArea=document.querySelector('#result-area');
    resultArea.innerHTML=data;
}