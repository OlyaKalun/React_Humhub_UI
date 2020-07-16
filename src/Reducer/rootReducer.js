import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { layoutReducer } from "./layoutReducer";
import { spaceReducer } from "./spaceReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  layoutReducer,
  spaceReducer,
});
