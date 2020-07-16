import {
  REQUEST_GET_USERS,
  RECEIVE_GET_USERS,
  REQUEST_USER_BY_ID,
  RECEIVE_USER_BY_ID,
  REQUEST_UPDATE_PROFILE,
  RECEIVE_UPDATE_PROFILE,
  CLEAR_UPDATE_STATUS
} from "../ActionsTypes/userActionsTypes";

export const requestGetUsers = () => ({
  type: REQUEST_GET_USERS
});

export const receiveGetUsers = payload => ({
  type: RECEIVE_GET_USERS,
  payload
});

export const requestUserById = payload => ({
  type: REQUEST_USER_BY_ID,
  payload
});

export const receiveUserById = payload => ({
  type: RECEIVE_USER_BY_ID,
  payload
});

export const requestUpdateProfile = payload => ({
  type: REQUEST_UPDATE_PROFILE,
  payload
});

export const receiveUpdateProfile = payload => ({
  type: RECEIVE_UPDATE_PROFILE,
  payload
});

export const clearUpdateStatus = () => ({
  type: CLEAR_UPDATE_STATUS
});
