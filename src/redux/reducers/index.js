import { combineReducers } from 'redux';
import playlist from './playlist';
import auth from './auth';

const rootReducer = combineReducers({
  playlist,
  auth,
});

export default rootReducer;
