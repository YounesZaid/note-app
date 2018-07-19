import React, { Component } from 'react';
import uid from 'uid';

export default class AddNoteInput extends Component {
  state = {
    noteTitle: "",
  }
  
  render() {
    const { dispatch } = this.props;
    const { noteTitle } = this.state;
    return (
      <div className="input-group">
        <input type="text" className="form-control"
          value={noteTitle}
          onChange={e => this.setState({ noteTitle: e.target.value })}
          aria-label="new note title"/>
        <div className="input-group-append">
          <a href="#create" className="btn btn-secondary btn-block" onClick={e => {
            e.preventDefault();
            const id = uid();
            dispatch({
              type: "CREATE_NOTE",
              noteTitle,
              noteContent: "Edit note",
              id
            })
            dispatch({
              type: 'SELECT_NOTE',
              id
            })
            this.setState({ noteTitle: "" });
          }}>Create new note</a>
        </div>
      </div>
    )
  }
}