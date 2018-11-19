// 1. react 와 reactDom 라이브러리 import
import React from "react";
import ReactDom from "react-dom";

// 2. React 컴포넌트 생성.

function getText() {
  return "click";
}

function getTime(){
    return (new Date().toLocaleTimeString())
}
const App = () => {
  //const tmpText = { happy: "hacking" }; 오브젝트 전체는 못넘겨줌.
  const buttonText = ["click", "getOut"];
  return (
    <div>
        <h3>{getTime()}</h3>
      <label htmlFor="name" class="name_label">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "solid 1px black"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

// 3. 화면에 HTML을 띄우기.
ReactDom.render(<App />, document.querySelector("#root"));
