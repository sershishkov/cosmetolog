import { combineReducers } from 'redux';
import nameOfPage from './nameOfPage';
import alert from './alert';

export default combineReducers({
  nameOfPage,
  alert,
  // auth,
  // adminUsers,
});
