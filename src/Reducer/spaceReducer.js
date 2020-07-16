import {
  RECEIVE_NEW_SPACE,
  RECEIVE_GET_SPACE,
} from "../ActionsTypes/spaceActionsTypes";

const initialState = { newSpace: "", allSpaces: [] };

export const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_SPACE:
      return {
        ...state,
        newSpace: action.payload.response,
      };
    case RECEIVE_GET_SPACE:
      return { ...state, allSpaces: action.payload.results };
    default:
      return state;
  }
};
