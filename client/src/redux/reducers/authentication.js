import { ACCOUNT } from '../actions/types';
import isEmpty from '../../validation/isEmpty';

const initialState = {
  account: {
    user: {
      id: '',
      first_name: '',
      last_name: '',
      email: ''
    },
    isAuth: {
      isAuthenticated: false
    }
  }
};

const account = (state=initialState, action) => {
  switch(action.type) {
    case ACCOUNT.SIGN_IN_USER:
      return {
        ...state,
        account: { 
          ...state.account, 
          user: { 
            id: action.payload.id,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
          },
          isAuth: { isAuthenticated: !isEmpty(action.payload) }
        }
      }
    default:
      return state
  };
};

export default account;