import React, { Component } from 'react';

class Main extends Component {
  state = {
    textareaContent: ''
  }
  render() {
    const { activeNoteReducer, noteReducer, store } = this.props;
    const noteArray = noteReducer.filter(note => note.id === activeNoteReducer);
    const noteObject = Object.assign({}, noteArray);
    console.log(noteObject)
    return (
      <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
        <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
          <div className="card-header">
            <h3 className="card-title">{noteObject[0].noteTitle}</h3>
          </div>
          <div className="card-body d-flex flex-grow-1 p-1">
            <div className="d-flex flex-grow-1">
              <textarea type="text" value={noteObject[0].noteContent} onChange={(e) => {
                e.preventDefault();
                store.dispatch({
                  type: "UPDATE_NOTE",
                  id: activeNoteReducer,
                  noteContent: e.target.value,
                  noteTitle: "changed"
                })
              }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
