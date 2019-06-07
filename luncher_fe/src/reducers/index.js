import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { schoolsReducer } from './schoolsReducer';

export default combineReducers({
  userReducer,
  schoolsReducer,
});