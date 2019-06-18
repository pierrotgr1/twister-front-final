// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9cYHgGAbxau_2Mgz7jNQ3KEozwm_GHTY",
  authDomain: "twister-d74f4.firebaseapp.com",
  databaseURL: "https://twister-d74f4.firebaseio.com",
  projectId: "twister-d74f4",
  storageBucket: "twister-d74f4.appspot.com",
  messagingSenderId: "878401591976",
  appId: "1:878401591976:web:3605df1d18b1b627"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
