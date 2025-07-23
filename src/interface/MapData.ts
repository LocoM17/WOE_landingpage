export interface MapData {
  mapId: string;
  mapName: string;
  description: string;
  mapType: string;

  versionGame: {
    grafico: string;
    version: string;
  };

  PlayersMax: string;
  downloadLink: string;
  Media: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    gif1: string;
    gif2: string;
    linkVideo: string;
  };
  creador1: Creator;
  creador2: Creator;
  creador3: Creator;
}

interface Creator {
  name: string;
  information: string;
  perfilIcon: string;
}
