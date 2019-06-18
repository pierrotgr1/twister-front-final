import {
  LOAD_TWISTS_SUCCESS,
  LOAD_TWISTS_ERROR,
  LOAD_OWN_TWISTS_SUCCESS,
  LOAD_OWN_TWISTS_ERROR,
  LIKE_ONE_TWIST_SUCCESS,
  LIKE_ONE_TWIST_ERROR,
  UNLIKE_ONE_TWIST_SUCCESS,
  UNLIKE_ONE_TWIST_ERROR
} from "../actions/actionTypes";

// GET CURRENT USER TWISTS LIST ACTION CREATOR
export const getUserTwistsList = currentUserFbId => async dispatch => {
  try {
    // 1. Get user twists list
    fetch(`http://localhost:8081/api/twists/${currentUserFbId}/get-all-twists`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: LOAD_TWISTS_SUCCESS,
          payload: data.ownAndFollowingsTwistsArr
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_TWISTS_ERROR,
          payload: "Sorry, we could not load twists."
        });
      });
  } catch (err) {
    dispatch({
      type: LOAD_TWISTS_ERROR,
      payload: "Sorry, we could not load twists."
    });
  }
};

// GET CURRENT USER OWN TWISTS LIST ACTION CREATOR
export const getUserOwnTwistsList = currentUserFbId => async dispatch => {
  try {
    // 1. Get user twists list
    fetch(`http://localhost:8081/api/twists/${currentUserFbId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: LOAD_OWN_TWISTS_SUCCESS,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_OWN_TWISTS_ERROR,
          payload: "Sorry, we could not load your twists."
        });
      });
  } catch (err) {
    dispatch({
      type: LOAD_OWN_TWISTS_ERROR,
      payload: "Sorry, we could not load your twists."
    });
  }
};

// Like one Twist action creator
export const likeOneTwist = (twist_id, currentUserFbId) => async dispatch => {
  try {
    console.log("inside like action");
    fetch(`http://localhost:8081/api/twists/${twist_id}/new-like`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentUserFbId })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: LIKE_ONE_TWIST_SUCCESS,
          payload: data.updatedLikedTwist
        });
        // trash solution that reloads the page automatically
        window.location.reload();
      })
      .catch(err => {
        dispatch({
          type: LIKE_ONE_TWIST_ERROR,
          payload:
            "Sorry, we could not like this twists seems like you already liked it."
        });
      });
  } catch (err) {}
};

// UnLike one Twist action creator
export const unlikeOneTwist = (twist_id, currentUserFbId) => async dispatch => {
  try {
    console.log("inside unlike action");
    fetch(`http://localhost:8081/api/twists/${twist_id}/unlike`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentUserFbId })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: UNLIKE_ONE_TWIST_SUCCESS,
          payload: data.updatedUnlikedLikedTwist
        });
      })
      .catch(err => {
        dispatch({
          type: UNLIKE_ONE_TWIST_ERROR,
          payload: "Sorry, we could not load your twists."
        });
      });
  } catch (err) {}
};
