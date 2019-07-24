import { ERRORS } from '../actions/types';

const initialState = {
  errors: {}
};

const errors = (state=initialState, action) => {
  switch(action.type) {
    case ERRORS.ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case ERRORS.CLEAR_EMAIL_BACKEND:
      return {
        ...state,
        errors: { ...state.errors, email: action.payload }
      }
    case ERRORS.CLEAR_PASSWORD_BACKEND:
      return {
        ...state,
        errors: { ...state.errors, password: action.payload }
      }
    default:
      return state
  }
};

export default errors;