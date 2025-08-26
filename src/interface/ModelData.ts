import { MediaItem } from "./MediaData";
import { User } from "./UserData";

export interface ModelsData {
  models: ModelData[];
}
export interface ModelData {
  idModelo: number;
  nameModel: string;
  typeModel: "classic" | "reforged";
  description: string;
  downloadLink: string;
  media: MediaItem[];
  autores: AutorMap[];
}

export interface AutorMap {
  autor: User;
  autorType: "creador" | "cocreador";
}
