import { POST } from './types';
import URL from './utils/URL';
import axios from 'axios';

export const setPost = id => dispatch => {
  axios
    .post(`${URL.post}/set-post`, id)
    .then(({ data: { post } }) => dispatch({ type: POST.SET_POST, payload: post}))
    .catch(e => dispatch({ type: POST.ERROR, payload: e.response.data }))
};


export const addPost = ({ id, post, temp }) => dispatch => {
  dispatch({ type: POST.EXP_ADD_POST, payload: { post, id: temp }});
  axios
    .post(`${URL.post}/add-post`, { id, post })
    .then(({ data:{ post }}) => dispatch({ type: POST.ADD_POST, payload: { ...post, temp } }))
    .catch(e => dispatch({ type: POST.ERROR, payload: e.response.data }))
};


export const updatePost = ({ post, id, position, temp, account_id }) => dispatch => {
  dispatch({ type: POST.EDIT_LOADING });
  dispatch({ type: POST.EXP_UPDATE_POST, payload: { post, id, position, temp } })
  axios
    .post(`${URL.post}/update-post`, { post, id, account_id })
    .then(({ data:{ post } }) => {
      dispatch({ type: POST.EDIT_LOADED });
      dispatch({ type: POST.UPDATE_POST, payload: { ...post, temp } });
    })
    .catch(e => {
      dispatch({ type: POST.EDIT_LOADED });
      dispatch({ type: POST.ERROR, payload: e.response.data });
    })
}


export const deletePost = id => dispatch => {
  axios
    .post(`${URL.post}/delete-post`, id)
    .then(() => dispatch({ type: POST.DELETE_POST, payload: id }))
    .catch(e => dispatch({ type: POST.ERROR, payload: e.response.data }))
};


export const deleteAll = id => dispatch => {
  dispatch({ type: POST.DELETE_LOADING });
  axios
    .post(`${URL.post}/delete-all-posts`, id)
    .then(() => {
      dispatch({ type: POST.DELETE_ALL_POSTS })
      dispatch({ type: POST.DELETE_LOADED })
    })
    .catch(e => {
      dispatch({ type: POST.DELETE_LOADED });
      dispatch({ type: POST.ERROR, payload: e.response.data })
    })
};

