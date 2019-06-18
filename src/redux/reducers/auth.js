import { AUTH_USER_SUCCESS, AUTH_USER_PENDING, AUTH_USER_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER_SUCCESS:
      return { ...state, authenticated: action.payload };
    case AUTH_USER_PENDING:
      return { ...state, errorMessage: action.payload };
    case AUTH_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
