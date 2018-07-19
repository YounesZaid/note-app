import React from 'react';
import classnames from 'classnames';

const NoteItem = (props) => {
  const { isDefault, isActive, title, onSelect, onDelete } = props;
  return (
    <div className={
      classnames("list-group-item list-group-item-action d-flex align-items-center pr-0 cursorPointer", {
        'active': isActive
      })
    }
      onClick={onSelect}>
      <span className="icon mr-3"><i className="fe fe-grid"></i></span>{title}
      {!isDefault && <div className="ml-auto d-inline">
        <a href="#delete" className="text-danger btn p-0" onClick={onDelete}>
          <i className="fe fe-delete"></i>
        </a>
      </div>}
    </div>
  )
}


export default NoteItem;
