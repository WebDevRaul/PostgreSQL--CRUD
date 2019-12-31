import { USER } from '../actions/types';

const INITIAL_STATE = {
  user: {
    isLoading: false
  }
}

const loading = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case USER.LOADING:
      return { ...state, user: { ...state.user, isLoading: true }};
    case USER.LOADED:
      return { ...state, user: { ...state.user, isLoading: false }};
    default:
      return state;
  }
};

export default loading;