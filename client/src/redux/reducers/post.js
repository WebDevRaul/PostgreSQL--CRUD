import { POST } from '../actions/types';

const initialState = {
  posts: []
};

const posts = (state=initialState, action) => {
  switch(action.type) {
    case POST.SET_POST:
      return {
        ...state,
        posts: action.payload
      }
    case POST.ADD_POST:
      return {
        ...state,
        posts: action.payload
      }
    case POST.DELETE_ONE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    case POST.DELETE_ALL_POSTS:
      return {
        ...state,
        posts: []
      }
    default:
      return state; 
  };
};

export default posts;