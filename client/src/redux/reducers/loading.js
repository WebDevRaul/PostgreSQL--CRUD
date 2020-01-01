import { USER, POST } from '../actions/types';

const INITIAL_STATE = {
  user: {
    isLoading: false
  },
  post: {
    delete: {
      isLoading: false
    }
  }
}

const loading = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case USER.LOADING:
      return { ...state, user: { ...state.user, isLoading: true }};
    case USER.LOADED:
      return { ...state, user: { ...state.user, isLoading: false }};
    case POST.ADD_LOADING:
      return { ...state, post: { ...state.post, add: { isLoading: true } }};
    case POST.ADD_LOADED:
      return { ...state, post: { ...state.post, add: { isLoading: false } }};
    case POST.EDIT_LOADING:
      return { ...state, post: { ...state.post, edit: { isLoading: true } }};
    case POST.EDIT_LOADED:
      return { ...state, post: { ...state.post, edit: { isLoading: false } }};
    case POST.DELETE_LOADING:
      return { ...state, post: { ...state.post, delete: { isLoading: true } }};
    case POST.DELETE_LOADED:
      return { ...state, post: { ...state.post, delete: { isLoading: false } }};
    default:
      return state;
  }
};

export default loading;