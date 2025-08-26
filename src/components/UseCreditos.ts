import { ExternalResource } from "@/interface/ExternalResource";
import { MapData } from "@/interface/MapData";
import { ModelData } from "@/interface/ModelData";

function UseCreditos(maps: MapData[], models: ModelData[]): ExternalResource[] {
  const resource: ExternalResource[] = [];

  for (const map of maps) {
    for (const media of map.Media) {
      resource.push({
        url: media.url,
        type: media.tipo,
        source: media.origen,
        context: "map",
        relatedName: map.mapName,
      });
    }
    for (const autor of map.autores) {
      resource.push({
        url: autor.autor.perfilIcon,
        type: "imagen",
        context: "user",
        relatedName: autor.autor.name,
      });
    }
    resource.push({
      url: map.downloadLink,
      type: "externo",
      context: "map",
      relatedName: map.mapName,
    });
  }
  //modelos
  for (const model of models) {
    for (const media of model.media) {
      resource.push({
        url: media.url,
        type: media.tipo,
        context: "model",
        relatedName: model.nameModel,
      });
    }
    for (const autor of model.autores) {
      resource.push({
        url: autor.autor.perfilIcon,
        type: "imagen",
        context: "user",
        relatedName: autor.autor.name,
      });
    }
    resource.push({
      url: model.downloadLink,
      type: "externo",
      context: "model",
      relatedName: model.nameModel,
    });
  }
  return resource;
}

export default UseCreditos;
