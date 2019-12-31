import { USER } from '../actions/types';

const INITIAL_STATE = {
  user: {
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
    default:
      return state;
  }
};

export default error;