import { ERRORS } from './types';

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