import React from 'react';
import classnames from 'classnames';

import NoteItem from '../Components/NoteItem';
import AddNoteInput from '../Components/AddNoteInput';

const notesList = [
  {
    id: "note-1",
    title: "default",
    content: ""
  }
];

const selectedNote = "note-1";

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput />
        </div>
        <div className="list-group list-group-transparent">
          {notesList.filter(note => note.id !== 'note-1').map(noteObject => (
            <NoteItem key={noteObject.id}
              noteId={noteObject.id}
              selectedNote={selectedNote}
              title={noteObject.title}
              onNoteItemClick={null}
              onNoteItemDeleted={null} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
