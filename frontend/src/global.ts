import { IItem, IItemsState } from "./Items/types";
import { IDatabaseState } from "./database/types";
import { IInfo } from "./info/types";
import { IService } from "./services/types";
import { ITerapeut } from "./terapeuts/types";

interface GlobalState {
    database: IDatabaseState;
}

interface AppState {
}

interface AppAction {
  type: string;
  // terapeuts
  terapeuts?: ITerapeut[];
  // infos
  infos?: IInfo[];
  // services
  services?: IService[];
}

export type { GlobalState, AppAction, AppState };