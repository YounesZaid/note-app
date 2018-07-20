import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  state = {
    textareaContent: ''
  }
  render() {
    const { notes, activeNote, dispatch } = this.props;
    const noteArray = notes.filter(note => note.id === activeNote);
    const note = Object.assign({}, noteArray);
    return (
      <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
        <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
          <div className="card-header">
            <h3 className="card-title">{note[0].noteTitle}</h3>
          </div>
          <div className="card-body d-flex flex-grow-1 p-1">
            <div className="d-flex flex-grow-1">
              <textarea type="text" value={note[0].noteContent} onChange={(e) => {
                e.preventDefault();
                dispatch({
                  type: "UPDATE_NOTE",
                  id: activeNote,
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

const mapStateToProps = (store) => {
  return {
    notes: store.notes,
    activeNote: store.activeNote
  }
}


export default connect(mapStateToProps)(Main);
