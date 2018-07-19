import React, { Component } from 'react';

export default class AddNoteInput extends Component {
  state = {
    noteTitle: "",
  }
  
  render() {
    const { store } = this.props;
    const { noteTitle } = this.state;
    return (
      <div className="input-group">
        <input type="text" className="form-control"
          value={this.state.noteTitle}
          onChange={e => this.setState({ noteTitle: e.target.value })}
          aria-label="new note title"/>
        <div className="input-group-append">
          <a href="#create" className="btn btn-secondary btn-block" onClick={e => {
            e.preventDefault();
            store.dispatch({
              type: "CREATE_NOTE",
              noteTitle,
              noteContent: "content",
              id: nextNote++
            })
            this.setState({ noteTitle: ""});
          }}>Create new note</a>
        </div>
      </div>
    )
  }
}

let nextNote = 0;