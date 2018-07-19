import React from 'react';
import classnames from 'classnames';

const NoteItem = (props) => {
  // const { selectedNote, onNoteItemClick, onNoteItemDeleted, title, activeNoteReducer } = this.props;
  // const { noteId } = this.state;
  return (
    <div className={
      classnames("list-group-item list-group-item-action d-flex align-items-center pr-0 cursorPointer", {
        'active': props.selectedNote === props.activeNoteReducer
      })
    }
      onClick={e => {
        props.onNoteItemClick();
      }}>
      <span className="icon mr-3"><i className="fe fe-grid"></i></span>{props.title}
      {props.selectedNote !== -1 && <div className="ml-auto d-inline">
        <a href="#delete" className="text-danger btn p-0" onClick={e => {
          e.preventDefault();
          props.onNoteItemDeleted();
          // alert(props.noteId)
        }}>
          <i className="fe fe-delete"></i>
        </a>
      </div>}
    </div>
  )
}


export default NoteItem;
