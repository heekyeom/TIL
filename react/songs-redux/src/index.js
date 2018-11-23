//react-redux setting
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// package and module
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 내가 작성한 모듈
import App from './components/App';
import reducers from './reducers'; //뒤에 인덱스를 알아서 찾아서 임포트 해줌.

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')    
)
