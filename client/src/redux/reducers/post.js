import { POST } from '../actions/types';

const initialState = {
  posts: [],
  test: []
};

const posts = (state=initialState, action) => {
  console.log(action.payload)
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
        test: posts.filter(item => item.id === 'b6f75f2a-b22a-11e9-acc0-0221deac008e')
      }
    default:
      return state; 
  };
};

export default posts;