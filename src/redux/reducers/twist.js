import {
  LOAD_TWISTS_SUCCESS,
  // LOAD_TWISTS_PENDING,
  LOAD_TWISTS_ERROR,
  LOAD_OWN_TWISTS_SUCCESS,
  // LOAD_OWN_TWISTS_PENDING,
  LOAD_OWN_TWISTS_ERROR,
  LIKE_ONE_TWIST_SUCCESS,
  LIKE_ONE_TWIST_ERROR,
  UNLIKE_ONE_TWIST_SUCCESS,
  UNLIKE_ONE_TWIST_ERROR
} from "../actions/actionTypes";

const INITIAL_STATE = {
  currentUserTwistsList: [],
  currentUserOwnTwistsList: [],
  errorTwistsMessage: "",
  errorOwnTwistsMessage: "",
  currentTwistLiked: {},
  currentTwistUnLiked: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TWISTS_SUCCESS:
      return { ...state, currentUserTwistsList: action.payload };
    case LOAD_OWN_TWISTS_SUCCESS:
      return { ...state, currentUserOwnTwistsList: action.payload };
    case LOAD_TWISTS_ERROR:
      return { ...state, errorTwistsMessage: action.payload };
    case LOAD_OWN_TWISTS_ERROR:
      return { ...state, errorOwnTwistsMessage: action.payload };
    case LIKE_ONE_TWIST_SUCCESS:
      return { ...state, currentTwistLiked: action.payload };
    case LIKE_ONE_TWIST_ERROR:
      return { ...state, errorTwistsMessage: action.payload };
    case UNLIKE_ONE_TWIST_SUCCESS:
      return { ...state, currentTwistUnLiked: action.payload };
    case UNLIKE_ONE_TWIST_ERROR:
      return { ...state, errorTwistsMessage: action.payload };
    default:
      return state;
  }
}
