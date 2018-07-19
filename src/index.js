import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import noteReducer from './Reducers/noteReducer';
import activeNoteReducer from './Reducers/activeNoteReducer';
import App from './App';

const render = () => {
  ReactDOM.render(<App store={store} {...store.getState()} />, document.getElementById('root'));
};

const appReducer = combineReducers({
  noteReducer,
  activeNoteReducer
});

const store = createStore(appReducer);
store.subscribe(render);
render();