import { ERRORS } from './types';

export const set_error = data => {
  return {
    type: ERRORS.ERROR,
    payload: data
  };
};

export const clear_error = () => {
  return {
    type: ERRORS.CLEAR_ERROR
  }
}

export const clearEmail = () => {
  return { 
    type: ERRORS.CLEAR_EMAIL_BACKEND,
    payload: ''
  };
};
export const clearPassword = () => {
  return { 
    type: ERRORS.CLEAR_PASSWORD_BACKEND,
    payload: ''
  };
};