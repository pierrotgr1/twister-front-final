import {
  LOAD_TWISTER_SUCCESS,
  LOAD_TWISTER_ERROR,
  LOAD_TWISTER_TWISTS_SUCCESS,
  LOAD_TWISTER_TWISTS_ERROR,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  twister: {},
  twisterTwistList: [],
  errorTwisterMessage: "",
  errorTwisterTwistsMessage: "",
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TWISTER_SUCCESS:
      return { ...state, twister: action.payload };
    case LOAD_TWISTER_ERROR:
      return { ...state, errorTwisterMessage: action.payload };
    case LOAD_TWISTER_TWISTS_SUCCESS:
      return { ...state, twisterTwistList: action.payload };
    case LOAD_TWISTER_TWISTS_ERROR:
      return { ...state, errorTwisterTwistsMessage: action.payload };
    default:
      return state;
  }
}
