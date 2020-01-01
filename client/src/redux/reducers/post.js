import { POST } from '../actions/types';

const initialState = {
  posts: []
};

const posts = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case POST.SET_POST:
      return { ...state, posts: payload };
    case POST.EXP_ADD_POST:
      return { ...state, posts: [...state.posts, payload ]};
    case POST.ADD_POST:
      return { ...state, posts: [ ...state.posts.filter(post => post.id !== payload.temp),
        { post: payload.post, id: payload.id, position: payload.position } ]};
    case POST.EXP_UPDATE_POST:
      const old_position = state.posts.find(post => post.id === payload.id).position;
      return { ...state, 
        posts: [...state.posts.filter(post => post.id !== payload.id), 
        { post: payload.post, id: payload.temp, position: old_position }
      ]}
    case POST.UPDATE_POST:
        return { ...state, 
          posts: [...state.posts.filter(post => post.id !== payload.temp),
        { post: payload.post, id: payload.id, position: payload.position }
        ]}
    case POST.DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== payload.id) }
    case POST.DELETE_ALL_POSTS:
      return { ...state,  posts: [] };
    default:
      return state; 
  };
};

export default posts;