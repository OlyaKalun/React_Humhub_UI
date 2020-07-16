import {
  REQUEST_NEW_SPACE,
  RECEIVE_NEW_SPACE,
  CLEAR_FIELD_SPACE,
  RECEIVE_GET_SPACE,
  REQUEST_GET_SPACE,
} from "../ActionsTypes/spaceActionsTypes";

export const requestNewSpace = (payload) => ({
  type: REQUEST_NEW_SPACE,
  payload: payload,
});

export const receiveNewSpace = (payload) => ({
  type: RECEIVE_NEW_SPACE,
  payload: payload,
});

export const clearFieldSpace = () => ({
  type: CLEAR_FIELD_SPACE,
});

export const receiveGetSpace = (payload) => ({
  type: RECEIVE_GET_SPACE,
  payload: payload,
});

export const requestGetSpace = () => ({
  type: REQUEST_GET_SPACE,
});
