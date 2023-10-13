import { AppAction } from "../global";
import { INIT_ITEMS } from "./constants";
import { IItemsState } from "./types";

const defaultState: IItemsState = {
    items: [],
};

export const itemsReducer = (
  state: IItemsState = defaultState,
  action: AppAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};