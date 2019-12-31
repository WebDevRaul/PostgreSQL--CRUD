import { USER, POST } from '../actions/types';

const INITIAL_STATE = {
  user: {
    error: {}
  },
  post: {
    error: {}
  }
}

const error = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case USER.ERROR:
      return { ...state, user: { ...state.user, error: payload } }
    case USER.CLEAR_ERRORS:
      return { ...state, user: { ...state.user, error: {} } }
    case POST.ERROR:
      return { ...state, post: { ...state.post, error: payload } }
    case POST.CLEAR_ERRORS:
      return { ...state, post: { ...state.post, error: {} } }
    default:
      return state;
  }
};

export default error;