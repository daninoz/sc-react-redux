import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';

// Combine multiple reduce functions in one
export default combineReducers({
  auth,
  track,
  routing: routerReducer
});