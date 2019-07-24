import { ACCOUNT } from '../actions/types';

const initialState = {
  register: ''
};

const register = ( state=initialState, action) => {
  switch(action.type) {
    case ACCOUNT.REGISTER_USER:
      return {
        ...state,
        register: action.payload
      }
    default:
      return state;
  };
};

export default register;