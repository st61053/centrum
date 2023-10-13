import { IInfo } from "../info/types";
import { IService } from "../services/types";
import { ITerapeut } from "../terapeuts/types";
import { INIT_INFOS, INIT_SERVICES, INIT_TERAPEUTS } from "./constants";

export const initTerapeuts = (terapeuts: ITerapeut[]) => ({
    terapeuts,
    type: INIT_TERAPEUTS,
  });

  export const initInfos = (infos: IInfo[]) => ({
    infos,
    type: INIT_INFOS,
  });

  export const initServices = (services: IService[]) => ({
    services,
    type: INIT_SERVICES,
  });