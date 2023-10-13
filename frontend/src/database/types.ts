import { IInfo } from "../info/types";
import { IService } from "../services/types";
import { ITerapeut } from "../terapeuts/types";

export interface IDatabaseState {
    terapeuts: ITerapeut[];
    infos: IInfo[];
    services: IService[];
}