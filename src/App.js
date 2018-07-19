import React, { Component } from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Main from './Layout/Main';

export default class App extends Component {
  render() {
    const { store, noteReducer, activeNoteReducer } = this.props;
    return [
      <div key={0} className="page-main d-flex flex-column">
        <Header />
        <div className="container my-3 d-flex flex-grow-1">
          <div className="row flex-nowrap flex-grow-1 flex-column flex-md-row">
            <Sidebar store={store} noteReducer={noteReducer} activeNoteReducer={activeNoteReducer} />
            <Main store={store} noteReducer={noteReducer} activeNoteReducer={activeNoteReducer} />
          </div>
        </div>
      </div>,
      <Footer key={1} />
    ]
  }
}
