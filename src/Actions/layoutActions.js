import { CHANGE_LAYOUT } from "../ActionsTypes/layoutActionTypes";

export const changeLayout = (layout) => ({
  type: CHANGE_LAYOUT,
  payload: layout
});
