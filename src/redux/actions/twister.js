import {
  LOAD_TWISTER_SUCCESS,
  LOAD_TWISTER_ERROR,
  LOAD_TWISTER_TWISTS_SUCCESS,
  LOAD_TWISTER_TWISTS_ERROR,
} from "./actionTypes";

// GET TWISTER DATA AND TWISTS LIST ACTION CREATOR
export const getTwisterData = twisterUsername => async dispatch => {
  try {
    // 1. Get user data
    fetch(`http://localhost:8081/api/users/search-twister/${twisterUsername}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(twisterData => {
        dispatch({
          type: LOAD_TWISTER_SUCCESS,
          payload: twisterData
        });

        // 2. If twister exist, get his twists list
        if (twisterData) {
          fetch(`http://localhost:8081/api/twists/${twisterData.firebaseId}`)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(twisterTwistsList => {
            dispatch({
              type: LOAD_TWISTER_TWISTS_SUCCESS,
              payload: twisterTwistsList
            });
          })
          .catch(err => {
            dispatch({
              type: LOAD_TWISTER_TWISTS_ERROR,
              payload: "Sorry, we could not load this twister twists."
            });
          });
        } else {
          // 3. else, if twister was not found, dispatch error message
          dispatch({
            type: LOAD_TWISTER_ERROR,
            payload: "Sorry, we could not load this twister info."
          });
        }
      })
      .catch(err => {
        dispatch({
          type: LOAD_TWISTER_ERROR,
          payload: "Sorry, we could not load this twister info."
        });
      });
  } catch (err) {
    dispatch({
      type: LOAD_TWISTER_ERROR,
      payload: "Sorry, we could not load this twister info."
    });
  }
};

// // GET TWISTER TWIST LIST ACTION CREATOR
// export const getTwisterTwistsList = twisterFbId => async dispatch => {
//   try {
//     // 1. Get user twists list
//     fetch(`http://localhost:8081/api/twists/${twisterFbId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then(data => {
//         console.log("data");
//         console.log(data);
//         dispatch({
//           type: LOAD_TWISTER_TWISTS_SUCCESS,
//           payload: data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: LOAD_TWISTER_TWISTS_ERROR,
//           payload: "Sorry, we could not load this twister twists."
//         });
//       });
//   } catch (err) {
//     dispatch({
//       type: LOAD_TWISTER_TWISTS_ERROR,
//       payload: "Sorry, we could not load this twister twists."
//     });
//   }
// };
