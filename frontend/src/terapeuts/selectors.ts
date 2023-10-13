import { createSelector } from "reselect";
import { GlobalState } from "../global";

export const getTerapeuts = () =>
  createSelector(
    (state: GlobalState) => state.database.terapeuts,
    (terapeuts) => terapeuts
  );