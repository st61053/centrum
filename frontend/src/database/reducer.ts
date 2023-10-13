import { AppAction } from "../global";
import { INIT_INFOS, INIT_SERVICES, INIT_TERAPEUTS } from "./constants";
import { IDatabaseState } from "./types";

const defaultState: IDatabaseState = {
    terapeuts: [],
    infos: [],
    services: [],
};

export const databaseReducer = (
  state: IDatabaseState = defaultState,
  action: AppAction
) => {
  switch (action.type) {
    case INIT_TERAPEUTS: 
    return {
        ...state,
        terapeuts: action.terapeuts
    }
    case INIT_INFOS: 
    return {
        ...state,
        infos: action.infos
    }
    case INIT_SERVICES: 
    return {
        ...state,
        services: action.services
    }
    default:
      return state;
  }
};