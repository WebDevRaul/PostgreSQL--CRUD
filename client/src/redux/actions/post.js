import { ERRORS, POST } from './types';
import URL from '../../backend/URL';
import axios from 'axios';

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

export const set_posts = data => {
  return {
    type: POST.SET_POST,
    payload: data
  }
};