import { combineReducers } from 'redux';
import errors from './errors';
import register from './register';
import account from './authentication';


export default combineReducers({
  errors,
  register,
  account
});