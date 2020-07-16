import { CHANGE_LAYOUT } from "../ActionsTypes/layoutActionTypes";

const initialState = { currentLayout: "General" };

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return { ...state, currentLayout: action.payload };
    default:
      return state;
  }
};
