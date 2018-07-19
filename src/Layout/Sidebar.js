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

const selectedNote = "note-1";

const Sidebar = ({ store }) => {
  const notes = store.getState();
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput store={store}/>
        </div>
        <div className="list-group list-group-transparent">
          {notes.filter(note => note.id !== 'note-1').map(noteObject => (
            <NoteItem key={noteObject.id}
              noteId={noteObject.id}
              selectedNote={selectedNote}
              title={noteObject.noteTitle}
              onNoteItemClick={null}
              onNoteItemDeleted={null} 
              store={store} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
