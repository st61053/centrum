import { createSelector } from "reselect";
import { GlobalState } from "../global";

export const getServices = () =>
  createSelector(
    (state: GlobalState) => state.database.services,
    (services) => services
  );