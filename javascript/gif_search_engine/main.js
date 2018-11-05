// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

button.addEventListener("click", () => {
  requestImg(inputArea.value);
});

inputArea.addEventListener("keyup", e => {
  // if(e.key==='Enter'){
  //     const inputValue=document.querySelector('#js-input').value;
  //     pushToDOM(inputValue);
  // }
  if (e.which === 13) {
    requestImg(inputArea.value);
  }
});

// 3. gif 파일들은 index.html에 밀어 넣는다.
const pushToDOM = parsedData => {
//   resultArea.innerHTML = "";
  resultArea.innerHTML = null;  //optimize. 자바스크립트의 가비지 컬렉터가 완벽하지 않기때문에.
  const dataSet = parsedData.data;
  dataSet.forEach(imgData => {
    let imgUrl = imgData.images.fixed_height.url;
    let imgTitle = imgData.title;
    resultArea.innerHTML += `<img src="${imgUrl}" alt="${imgTitle}"/>`;
  });

  // let imgUrl=parsedData.data[0].images.fixed_height.url;
  // resultArea.innerHTML=`<img src="${imgUrl}" alt="dog"/>`;
};

const requestImg = (inputValue) => {
  // 2. API를 활용하여 data를 받는다. 그리고 가공한다.
  const API_KEY = "yLvfO2kxOHwGNvhmFDs1lFulj8ThH2py";
  const URL = `http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${API_KEY}`;

  // ajax request
  const GiphyAjaxCall = new XMLHttpRequest();
  GiphyAjaxCall.open("GET", URL);
  GiphyAjaxCall.send();
  GiphyAjaxCall.addEventListener("load", e => {
    //load가 완료 되었을 때,
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData); //json 형식의 문자열을 오브젝트로 바꿈.
    pushToDOM(parsedData);
  });
};
