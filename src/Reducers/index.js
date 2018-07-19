import { combineReducers } from 'redux';

import noteReducer from './noteReducer';
import activeNoteReducer from './activeNoteReducer';

const appReducer = combineReducers({
  notes: noteReducer,
  activeNote: activeNoteReducer
});

export default appReducer;