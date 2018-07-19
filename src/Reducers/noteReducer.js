export const defaultState = [
  {
    noteTitle: "Default Note",
    noteContent: "welcome to the Note App",
    id: -1
  }
];

export const noteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return [
        ...state,
        {
          noteTitle: action.noteTitle,
          noteContent: action.noteContent,
          id: action.id
        }
      ]

    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.id)

    case "UPDATE_NOTE":
      return state.map(note =>
        note.id === action.id ?
          {
            ...note,
            noteContent: action.noteContent
          } : note
      )
    default:
      return state
  }
}

