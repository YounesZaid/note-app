import {
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from '../Constant';

const defaultState = [
  {
    noteTitle: "Default Note",
    noteContent: "welcome to the Note App",
    id: '-1'
  }
];

const noteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          noteTitle: action.noteTitle,
          noteContent: action.noteContent,
          id: action.id
        }
      ]

    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id)

    case UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            noteContent: action.noteContent
          }
        } else {
          return note
        }
      }
      )
    default:
      return state
  }
}

export default noteReducer;
