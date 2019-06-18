import {
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  FOLLOW_SUCCESS,
  FOLLOW_ERROR,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_ERROR
} from "../actions/actionTypes";

const INITIAL_STATE = {
  currentUser: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return { ...state, currentUser: action.payload };
    case LOAD_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case FOLLOW_SUCCESS:
      return { ...state, currentUser: action.payload };
    case FOLLOW_ERROR:
      return { ...state, errorMessage: action.payload };
    case UNFOLLOW_SUCCESS:
      return { ...state, currentUser: action.payload };
    case UNFOLLOW_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
