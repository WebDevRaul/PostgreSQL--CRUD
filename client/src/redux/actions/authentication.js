import { ERRORS, ACCOUNT } from './types';
import URL from '../../backend/URL';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

export const register = (user_data, history) => dispatch => {
  axios
    .post(`${URL.account}/register`, user_data)
    .then(res => dispatch({
      type: ACCOUNT.REGISTER_USER,
      payload: res.data.message
    }))
    .then(() => history.push('/sign-in'))
    .catch(e => dispatch({
      type: ERRORS.ERROR,
      payload: e.response.data
    }));
};

export const sign_in = user_data => dispatch => {
  axios
    .post(`${URL.account}/sign-in`, user_data)
    .then(res => {
      const { token } = res.data;

      // Set token to localStorage
      localStorage.setItem('jwtToken', token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      
      dispatch(setCurrentUser(decoded));
    })
    .catch(e => dispatch({
      type: ERRORS.ERROR,
      payload: e.response.data
    }))
}

export const setCurrentUser = decoded => {
  return {
    type: ACCOUNT.SIGN_IN_USER,
    payload: decoded
  };
};

export const sign_out = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};