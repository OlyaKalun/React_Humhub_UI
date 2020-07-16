import {
  REQUEST_SIGN_IN,
  RECEIVE_SIGN_IN,
  LOGIN_ERROR,
  SERVER_ERROR,
  CLEAR_ERRORS,
  REQUEST_SIGN_UP,
  CLEAR_TOKEN,
} from "../ActionsTypes/authActionsTypes";

export const requestSignIn = (payload) => ({
  type: REQUEST_SIGN_IN,
  payload: payload,
});

export const receiveSignIn = (payload) => ({
  type: RECEIVE_SIGN_IN,
  payload: payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const serverError = (payload) => ({
  type: SERVER_ERROR,
  payload,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveSignUp = (payload) => ({
  type: REQUEST_SIGN_UP,
  payload,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
