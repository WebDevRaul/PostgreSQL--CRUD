import { ACCOUNT, POST } from '../actions/types';
import isEmpty from '../../validation/isEmpty';

const initialState = {
  account: {
    user: {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      posts: []
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
            posts: action.payload.posts
          },
          isAuth: { isAuthenticated: !isEmpty(action.payload) }
        }
      }
    case POST.ADD_POST:
      return {
        ...state,
        account: {
          ...state.account,
          user: {
            ...state.account.user,
            posts: action.payload
          }
        }
      }
    default:
      return state
  };
};

export default account;