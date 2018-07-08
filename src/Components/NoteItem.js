import React from 'react';
import classnames from 'classnames';

const NoteItem = (props) => {
  return (
    <div className={
        classnames("list-group-item list-group-item-action d-flex align-items-center pr-0", {
          'active': props.selectedNote === props.noteId
        })
      }
      onClick={e => {
      }}>
      <span className="icon mr-3"><i className="fe fe-grid"></i></span>{props.title}
      {props.selectedNote !== 'note-1' && <div className="ml-auto d-inline">
        <a href="#delete" className="text-danger btn p-0" onClick={e => {
          e.preventDefault();
        }}>
          <i className="fe fe-delete"></i>
        </a>
      </div>}
    </div>
  )
}

export default NoteItem;
