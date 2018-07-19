const activeNoteReducer = (state = -1, action) => {
  switch (action.type) {
    case "SELECT_NOTE":
      return action.id
    default:
      return state
  }
}

export default activeNoteReducer;