import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import twistReducer from "./twist";
import twisterReducer from "./twister";

export default combineReducers({
  authReducer,
  userReducer,
  twistReducer,
  twisterReducer
});
