import { combineReducers } from 'redux';

import { noteReducer } from './noteReducer';
import activeNoteReducer from './activeNoteReducer';

const appReducer = combineReducers({
  noteReducer,
  activeNoteReducer
});

export default appReducer;