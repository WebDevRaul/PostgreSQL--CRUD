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
    default:
      return state; 
  };
};

export default posts;