/* 1. 검색 */

/* 2. SoundCloud API  사용하기 */
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTrack: inputValue => {
    SC.get("/tracks", {
      q: inputValue
    }).then(function(tracks) {
      SoundCloudAPI.renderTracks(tracks);
    });
  } //google style guide. object 끝에 , 해주기.
};

// find all sounds of buskers licensed under 'creative commons share alike'

SoundCloudAPI.init();
SoundCloudAPI.getTrack("busker");  
/*
    renderTracks 정의가 밑에 있어도 정확히 불러와진다.
    이유는 javascript는 정의 부분을 모두 위로 끌어올려 정의가 먼저 되게 해준다.
*/
/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = tracks => {
    console.log(tracks);
  tracks.forEach(track => {
    //card
    const card = document.createElement("div");
    card.classList.add("card");

    //image
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    const imageImg = document.createElement("img");
    imageImg.classList.add("image-img");
    let imageSrc='http://lorempixel.com/200/200/abstract';
    imageImg.src = track.artwork_url !== null ? track.artwork_url:imageSrc;
    //imageImg.src =(track.artwork_url || imageSrc);
    imageDiv.appendChild(imageImg);

    //content
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    const aCard = document.createElement("a");
    aCard.href = track.permalink_url;
    aCard.target = '_black';  // 새탭에서 실행되게.
    headerDiv.appendChild(aCard);
    contentDiv.appendChild(headerDiv);
    aCard.innerHTML = track.title;

    //button
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("ui", "bottom", "attached", "button", "js-button");
    const addI = document.createElement("i");
    addI.classList.add("add", "icon");
    const spanTag = document.createElement("span");
    buttonDiv.appendChild(addI);
    buttonDiv.appendChild(spanTag);
    spanTag.innerHTML = "add to playlist";

    card.appendChild(imageDiv);
    card.appendChild(contentDiv);
    card.appendChild(buttonDiv);

    const searchResult = document.querySelector("#js-search-results");
    searchResult.appendChild(card);
  });
  console.log(card);
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */
