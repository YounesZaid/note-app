import React from 'react';
import { connect } from 'react-redux';

import NoteItem from '../Components/NoteItem';
import AddNoteInput from '../Components/AddNoteInput';

const Sidebar = (props) => {
  const { notes, dispatch, activeNote } = props;
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput dispatch={dispatch} />
        </div>
        <div className="list-group list-group-transparent">
          {notes.map(note => (
            <NoteItem key={note.id}
              isActive={note.id === activeNote}
              isDefault={note.id === '-1'}
              title={note.noteTitle}
              onSelect={(e) => {
                e.preventDefault();
                dispatch({
                  type: "SELECT_NOTE",
                  id: note.id
                })
              }}
              onDelete={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch({
                  type: "DELETE_NOTE",
                  id: note.id
                })
              }} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    notes: store.notes,
    activeNote: store.activeNote
  }
}

export default connect(mapStateToProps)(Sidebar);
