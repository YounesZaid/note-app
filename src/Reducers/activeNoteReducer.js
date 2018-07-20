const defaultState = '-1';

const activeNoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SELECT_NOTE":
      return action.id

    case 'DELETE_NOTE':
      if (action.id === state) {
        return defaultState;
      }
      return state;

    default:
      return state
  }
}

export default activeNoteReducer;