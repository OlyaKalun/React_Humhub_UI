import {
  RECEIVE_SIGN_IN,
  LOGIN_ERROR,
  SERVER_ERROR,
  CLEAR_ERRORS,
  CLEAR_TOKEN,
} from "../ActionsTypes/authActionsTypes";

const initialState = { token: "", errorMessage: "" };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SIGN_IN:
      return {
        ...state,
        token: action.payload.response.auth_token,
        // id: action.payload.uid,
      };
    case LOGIN_ERROR:
      return { ...state, errorMessage: action.payload };
    case SERVER_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERRORS:
      return { ...state, errorMessage: "" };
    case CLEAR_TOKEN:
      return { ...state, token: "" };
    default:
      return state;
  }
};
