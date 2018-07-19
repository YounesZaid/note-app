import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import noteReducer from './Reducers/noteReducer';
import App from './App';

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

const store = createStore(noteReducer);
store.subscribe(render);
render();