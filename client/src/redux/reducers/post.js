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
    case POST.EXP_ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { post: action.payload.post, id: action.payload.exp }]
      }
    case POST.ADD_POST:
      return {
        ...state,
        posts: [
          // remove old post
          ...state.posts.filter(item => item.id !== action.payload.exp), 
          // add new post w/o the exp data
          { post: action.payload.post, id: action.payload.id, position: action.payload.position }
        ]
      }
    case POST.EXP_UPDATE_POST:
      const old_position = state.posts.find(item => item.id === action.payload.id).position;
      return {
        ...state,
        // remove old post
        posts: [...state.posts.filter(item => item.id !== action.payload.id), 
        // udpate post
        { post: action.payload.post, id: action.payload.id, position: old_position }
        ]
      }
    case POST.UPDATE_POST:
        return {
          ...state,
          posts: [...state.posts.filter(item => item.id !== action.payload.id), action.payload]
        }
    case POST.EXP_DELETE_ONE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    case POST.DELETE_ONE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    case POST.EXP_DELETE_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case POST.DELETE_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state; 
  };
};

export default posts;