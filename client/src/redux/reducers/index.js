import { combineReducers } from 'redux';
import errors from './errors';
import register from './register';
import account from './authentication';
import posts from './post';


export default combineReducers({
  errors,
  register,
  account,
  posts
});