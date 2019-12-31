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
  dispatch({ type: POST.ADD_LOADING });
  dispatch({ type: POST.EXP_ADD_POST, payload: { post, id: temp }});
  axios
    .post(`${URL.post}/add-post`, { id, post })
    .then(({ data: { post } }) => {
      dispatch({ type: POST.ADD_POST, payload: { ...post, temp } })
      dispatch({ type: POST.ADD_LOADED });
    })
    .catch(e => {
      dispatch({ type: POST.ADD_LOADED });
      dispatch({ type: POST.ERROR, payload: e.response.data })
    })
};


export const deleteAll = id => dispatch => {
  dispatch({ type: POST.DELETE_LOADING });
  dispatch({ type: POST.DELETE_ALL_POSTS });
  axios
    .post(`${URL.post}/delete-all-posts`, id)
    .then(() => dispatch({ type: POST.DELETE_LOADED }))
    .catch(e => {
      dispatch({ type: POST.DELETE_LOADED });
      dispatch({ type: POST.ERROR, payload: e.response.data })
    })
};


// export const add_post = data => dispatch => {
//     // Expected Promise
//     dispatch({ type: POST.EXP_ADD_POST, payload: data });
//   axios
//     .post(`${URL.post}/add-post`, data)
//     .then(res => {
//       res.data.post.exp = data.exp;
//       dispatch({
//         type: POST.ADD_POST,
//         payload: res.data.post
//       });
//     })
//     .catch(e => dispatch({
//       type: ERRORS.ERROR,
//       payload: e.response.data
//     }));
// };

// export const update_post = data => dispatch => {
//   // Expected promise
//   const exp_data = { post: data.post, id: data.id };
//   dispatch({ type: POST.EXP_UPDATE_POST, payload: exp_data });
//   axios
//     .put(`${URL.post}/update-post`, data)
//     .then(res => dispatch({
//       type: POST.UPDATE_POST,
//       payload: res.data.post
//     }))
//     .catch(e => dispatch({
//       type: ERRORS.ERROR,
//       payload: e.response.data
//     }))
// }

// export const delete_post = data => dispatch => {
//   // Expected Promise
//   dispatch({ type: POST.EXP_DELETE_ONE_POST, payload: data.id });
//   axios
//     .post(`${URL.post}/delete-post`, data)
//     .then(success => dispatch({
//       type: POST.DELETE_ONE_POST,
//       payload: data.id
//     }))
//     .catch(e => dispatch({
//       type: ERRORS.ERROR,
//       payload: e.response.data
//     }));
// };

// export const delete_all_posts = id => dispatch => {
//   // Expected promise
//   dispatch({ type: POST.EXP_DELETE_ALL_POSTS, payload: [] });
//   axios
//     .post(`${URL.post}/delete-all-posts`, id)
//     .then(success => dispatch({
//       type: POST.DELETE_ALL_POSTS,
//       payload: []
//     }))
//     .catch(e => dispatch({
//       type: ERRORS.ERROR,
//       payload: e.response.data
//     }));
// };