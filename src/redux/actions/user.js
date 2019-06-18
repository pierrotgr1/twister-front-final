import {
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  FOLLOW_SUCCESS,
  FOLLOW_ERROR,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_ERROR
} from "./actionTypes";

// GET USER DATA ACTION CREATOR
export const getUserData = currentUserFbId => async dispatch => {
  try {
    // 1. Get user data
    fetch(`http://localhost:8081/api/users/${currentUserFbId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: LOAD_USER_SUCCESS,
          payload: data.userToFind
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_USER_ERROR,
          payload: "Sorry, we could not load your info."
        });
      });
  } catch (err) {
    dispatch({
      type: LOAD_USER_ERROR,
      payload: "Sorry, we could not load your info."
    });
  }
};

// FOLLOW ONE TWISTER ACTION CREATOR
export const follow = (
  currentUserFbId,
  twisterToFollowFbId
) => async dispatch => {
  try {
    fetch(`http://localhost:8081/api/users/${currentUserFbId}/add-following`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ twisterToFollowFbId })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data.isNewFollow) {
          dispatch({
            type: FOLLOW_SUCCESS,
            payload: data.updatedCurrentUser
          });
        } else {
          dispatch({
            type: FOLLOW_ERROR,
            payload: data.message
          });
        }
      })
      .catch(err => {
        dispatch({
          type: FOLLOW_ERROR,
          payload:
            "Sorry, there was a problem, we could not add this following."
        });
      });
  } catch (err) {
    dispatch({
      type: FOLLOW_ERROR,
      payload: "Sorry, there was a problem, we could not add this following."
    });
  }
};

// UNFOLLOW ONE TWISTER ACTION CREATOR
export const unfollow = (
  currentUserFbId,
  twisterToUnfollowFbId
) => async dispatch => {
  try {
    fetch(
      `http://localhost:8081/api/users/${currentUserFbId}/delete-following`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ twisterToUnfollowFbId })
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        dispatch({
          type: UNFOLLOW_SUCCESS,
          payload: data.updatedCurrentUser
        });
      })
      .catch(err => {
        dispatch({
          type: UNFOLLOW_ERROR,
          payload:
            "Sorry, there was a problem, we could not delete this following."
        });
      });
  } catch (err) {
    dispatch({
      type: UNFOLLOW_ERROR,
      payload: "Sorry, there was a problem, we could not delete this following."
    });
  }
};
