import { AUTH_USER_SUCCESS, AUTH_USER_PENDING, AUTH_USER_ERROR } from './actionTypes';
import firebase from '../../services/firebase';


// SIGNUP ACTION CREATOR
export const signup = (formData, callback) => (
  async dispatch => {
    try {
      var { email, username, password } = formData;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          fetch('http://localhost:8081/api/users/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: username,
              firebaseId: res.user.uid
            })
          })
          .then(res => res.json())
          .then(res => {
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function() {
              // Display confirmation message to user
              dispatch({
                type: AUTH_USER_PENDING,
                payload: "Thank you, your account was created successfully! You need to first verify your email to access Twister. Go check your inbox, we just sent you an email to do so."
              });
              callback();
            }).catch(function(error) {
              // An error happened.
              dispatch({
                type: AUTH_USER_ERROR,
                payload: "Oops, something went wrong"
              });
            });
          })
          .catch(err => {
            dispatch({
              type: AUTH_USER_ERROR,
              payload: "Sorry, there was an error with your request. Please try again"
            });
          })
        })
        .catch(err => {
          dispatch({
            type: AUTH_USER_ERROR,
            payload: "Sorry, we could not create your account. Please try again."
          });
        })
    } catch(err) {

    }
  }
);

// SIGNIN ACTION CREATOR
export const signin = (formData, callback) => (
  async (dispatch) => {
    try {
      var { email, password } = formData;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        if(res.user) {
          // Signin in successful
          dispatch({
            type: AUTH_USER_SUCCESS,
            payload: res.user.uid
          });

          // Saving user firebase ID in localStorage to maintain auth
          localStorage.setItem('userId', res.user.uid);

          // Adding callback to redirect user to Main component
          callback();
        } else {
          // An error occured
          dispatch({
            type: AUTH_USER_ERROR,
            payload: "Oops, we could not sign you in. Check your credentials."
          });
        }
      })
      .catch(function(error) {
        // An error occured
        dispatch({
          type: AUTH_USER_ERROR,
          payload: "Oops, we could not sign you in. Check your credentials."
        });
      });
    } catch(err) {
      // An error occured
      dispatch({
        type: AUTH_USER_ERROR,
        payload: "Oops, something went wrong :("
      });
    }
  }
);

// SIGNOUT ACTION CREATOR
export const signout = () => {
  localStorage.removeItem('userId');
  return {
    type: AUTH_USER_SUCCESS,
    payload: ""
  };
};
