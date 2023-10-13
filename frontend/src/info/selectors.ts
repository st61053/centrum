import { createSelector } from "reselect";
import { GlobalState } from "../global";

export const getInfos = () =>
  createSelector(
    (state: GlobalState) => state.database.infos,
    (infos) => infos
  );