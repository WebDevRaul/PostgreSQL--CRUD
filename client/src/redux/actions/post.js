import { ERRORS, POST } from './types';
import URL from '../../backend/URL';
import axios from 'axios';

export const set_post = id => dispatch => {
  axios
    .get(`${URL.account}/post`, id)
    .then(res => dispatch({
      type: POST.SET_POST,
      payload: res.data.post
    }))
    .catch(e => dispatch({
      type: ERRORS.ERROR,
      payload: e.response.data
    }));
};

export const add_post = data => dispatch => {
  axios
    .post(`${URL.account}/add-post`, data)
    .then(res => dispatch({
      type: POST.ADD_POST,
      payload: res.data.post
    }))
    .catch(e => dispatch({
      type: ERRORS.ERROR,
      payload: e.response.data
    }));
};