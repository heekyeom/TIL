// import random;

const mainGif = ["dog", "cat", "git", "rabbit", "prog", "turtle"];
const mainArea=document.querySelector("#main-area");
const API_KEY = "yLvfO2kxOHwGNvhmFDs1lFulj8ThH2py";

const URL = `http://api.giphy.com/v1/gifs/search?q=${
      mainGif[Math.floor(Math.random()*mainGif.length)]
    }&api_key=${API_KEY}`;
    const GiphyAjaxCall = new XMLHttpRequest();
    GiphyAjaxCall.open("GET", URL);
    GiphyAjaxCall.send();
    GiphyAjaxCall.addEventListener("load", e => {
        //load가 완료 되었을 때,
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData); //json 형식의 문자열을 오브젝트로 바꿈.
        const dataSet = parsedData.data;
        let imgUrl = dataSet[0].images.fixed_height.url;
        let imgTitle = dataSet[0].title;
        mainArea.innerHTML = `<img src="${imgUrl}" alt="${imgTitle}" class="img-center"/>`;
    });
    
setInterval(()=>{
    const URL = `http://api.giphy.com/v1/gifs/search?q=${
      mainGif[Math.floor(Math.random()*mainGif.length)]
    }&api_key=${API_KEY}`;
    const GiphyAjaxCall = new XMLHttpRequest();
    GiphyAjaxCall.open("GET", URL);
    GiphyAjaxCall.send();
    GiphyAjaxCall.addEventListener("load", e => {
        //load가 완료 되었을 때,
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData); //json 형식의 문자열을 오브젝트로 바꿈.
        const dataSet = parsedData.data;
        let imgUrl = dataSet[0].images.fixed_height.url;
        let imgTitle = dataSet[0].title;
        mainArea.innerHTML = `<img src="${imgUrl}" alt="${imgTitle}" class="img-center"/>`;
    });
},3000);

