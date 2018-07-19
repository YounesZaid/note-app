import React from 'react';
// import classnames from 'classnames';

import NoteItem from '../Components/NoteItem';
import AddNoteInput from '../Components/AddNoteInput';

// const notesList = [
//   {
//     id: "note-1",
//     title: "default",
//     content: " welcome"
//   }
// ];

// const selectedNote = "note-1";

const Sidebar = ({ store, noteReducer, activeNoteReducer }) => {
  // const notes = store.getState();
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput store={store} />
        </div>
        <div className="list-group list-group-transparent">
          {noteReducer.map(noteObject => (
            <NoteItem key={noteObject.id}
              noteId={noteObject.id}
              selectedNote={noteObject.id}
              title={noteObject.noteTitle}
              onNoteItemClick={() => store.dispatch({
                type: "SELECT_NOTE",
                id: noteObject.id
              })}
              onNoteItemDeleted={(noteId) => store.dispatch({
                type: "DELETE_NOTE",
                id: noteId
              })} 
              store={store}
              activeNoteReducer={activeNoteReducer}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
