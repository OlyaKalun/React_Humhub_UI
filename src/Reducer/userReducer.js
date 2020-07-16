import {
  RECEIVE_GET_USERS,
  RECEIVE_USER_BY_ID,
  RECEIVE_UPDATE_PROFILE,
  CLEAR_UPDATE_STATUS,
} from "../ActionsTypes/userActionsTypes";

const initialState = {
  allUsers: null,
  currentUserProfile: null,
  updateProfileStatus: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GET_USERS:
      return { ...state, allUsers: action.payload.results };
    case RECEIVE_USER_BY_ID:
      return { ...state, currentUserProfile: action.payload.profile };
    case RECEIVE_UPDATE_PROFILE:
      return { ...state, updateProfileStatus: action.payload };
    case CLEAR_UPDATE_STATUS:
      return { ...state, updateProfileStatus: false };
    default:
      return state;
  }
};
