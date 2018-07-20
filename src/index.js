import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './Reducers';
import App from './App';

let defaultState = {
  notes: [
    {
      noteTitle: "Default Note",
      noteContent: "welcome to the Note App",
      id: '-1'
    }
  ], 
  activeNote: '-1'
}

try {
  let notes = localStorage.getItem('state');
  if (notes)
    defaultState = JSON.parse(notes);
} catch(e) {}

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch(e) {}
})