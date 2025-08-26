import { MediaItem } from "./MediaData";
import { User } from "./UserData";

export interface MapData {
  mapId: string;
  mapName: string;
  description: string;
  mapType: string;
  origin: "Hive" | "Discord" | "ForoWoe" | "Repositorio";
  PlayersMax: string;
  downloadLink: string;
  autores: AutorMap[];
  Media: MediaItem[];
  versionGame: {
    grafico: string;
    version: string;
  };
}
export interface AutorMap {
  autor: User;
  autorType: "creador" | "cocreador";
}
