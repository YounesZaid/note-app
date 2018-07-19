import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import appReducer from './Reducers/index';
import App from './App';

const render = () => {
  ReactDOM.render(<App store={store} {...store.getState()} />, document.getElementById('root'));
};



const store = createStore(appReducer);
store.subscribe(render);
render();