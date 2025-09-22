import { MapData } from "@/interface/MapData";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
//json de origen
//interface

const dataMapRaw: MapData[] = [
  {
    mapId: "1",
    mapName: "MortalCraft",
    description:
      "Elije tu héroe, cumple con los objetivos, no tienes que armar recetas, compra y consigue la victoria.",
    mapType: "AOS/Hero Arena",
    origin: "Repositorio",
    PlayersMax: "10",
    downloadLink:
      "https://www.mediafire.com/file/jcl9vbnj91qt2fe/MortalCraft+Beta_V12.w3x/file",
    autores: [
      {
        autor: {
          name: "ZyX",
          information: 'No conoce la palabra "Balance"',
          perfilIcon:
            "https://www.hiveworkshop.com/data/avatars/o/326/326303.jpg?1756687960",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://i.ibb.co/Ldjn9C9W/MCImage.png",
        origen: "mapa",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "1.27b",
    },
  },
  {
    mapId: "2",
    mapName: "Freddy Krueger Escape",
    description:
      "Freddy Krueger Escape es un mapa multijugador donde 10 víctimas deben sobrevivir en una pesadilla, siendo atormentadas por Freddy Krueger y sus secuaces. Elige diferentes modos de juego y sigue el objetivo: Víctima, Freddy o Cadáver Reanimado. Este mapa se desarrolla en una mansión en el mundo de los sueños.",
    mapType: "Survival Horror",
    origin: "Repositorio",
    PlayersMax: "11",
    downloadLink:
      "https://www.hiveworkshop.com/threads/freddy-krueger-escape-2-9c.331498/",
    autores: [
      {
        autor: {
          name: "Kadakash & Zharko",
          information: "La tiene como un burro",
          perfilIcon: "https://i.imgur.com/mCGT9TR.jpeg",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://i.ibb.co/kswrXVry/FKE-captura-1.png",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "1.27b",
    },
  },
  {
    mapId: "3",
    mapName: "Hardcore Ninja",
    description:
      "Port fiel al modo arcade de Dota2, dos equipos usan su habilidad y agilidad mental en un enfrentamiento por rondas.",
    mapType: "Hero Arena",
    origin: "Repositorio",
    PlayersMax: "10",
    downloadLink: "",
    autores: [
      {
        autor: {
          name: "Shikuso",
          information: "Quien rayos es ese?",
          perfilIcon: "",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd",
      version: "1.26a ?",
    },
  },
  {
    mapId: "4",
    mapName: "Tower Arsenal Arena Attack! (TAAA)",
    description:
      "Para escoger 2 modos de juego, FFA y Conquista. Se gana juntando los puntos votados a llegar, sea Solo o en Equipo. PD el Pollo esta OP dahh...",
    mapType: "Hero Arena",
    origin: "Repositorio",
    PlayersMax: "12",
    downloadLink: "https://www.epicwar.com/maps/345084/",
    autores: [
      {
        autor: {
          name: "AngelCraft & xShai",
          information:
            "como que tengo que salir, comer, ir al baño, Dormir etc...",
          perfilIcon: "...",
        },
        autorType: "cocreador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd / Cocreador",
      version: "1.27b",
    },
  },
  {
    mapId: "5",
    mapName: "Kingdoms Battle",
    description:
      "Mapa pvp de 6 jugadores de estrategia, con el objetivo de destruir los ayuntamientos de tus enemigos (basado en la campaña Reinos).",
    mapType: "RTS custom",
    origin: "Repositorio",
    PlayersMax: "6",
    downloadLink:
      "https://drive.google.com/file/d/1LzfwdcDbyxWUGlCRCDqKEyBjZVzMV0Yd/view?usp=drive_link",
    autores: [
      {
        autor: {
          name: "LocoM",
          information: "...",
          perfilIcon: "https://i.ibb.co/60HgPFgC/zerglingxd.gif",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://i.ibb.co/pBCV8269/Kingdoms-Battle.png",
        origen: "mapa",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "1.26/actual",
    },
  },
  {
    mapId: "6",
    mapName: "Defense of the Citadel: Endsieg",
    description:
      "Escoge un demonio y protege el último bastión de la Legión de Fuego en Lordaeron de oleadas de enemigos dispuestos a expulsarte del planeta.",
    mapType: "Hero Defense",
    origin: "Repositorio",
    PlayersMax: "8",
    downloadLink: "TEMPORAL: Discord de WoE",
    autores: [
      {
        autor: {
          name: "KakorinVonSteam",
          information: "Tiene ganas de hacer reworks pero le da pereza.",
          perfilIcon: "...",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd",
      version: "Reforged",
    },
  },
  {
    mapId: "7",
    mapName: "Lucha De Heroes",
    description:
      "Un mapa battle royale en donde tendrás que escoger un héroe del warcraft vanilla el cual no tiene habilidades y estas se encuentran en el mapa. Este último se va cerrando conforme pasa el tiempo.",
    mapType: "Battle Royale",
    origin: "Repositorio",
    PlayersMax: "8",
    downloadLink: "",
    autores: [
      {
        autor: {
          name: "NOVA_341",
          information: "Quiere hacer de todo y no le sale nada",
          perfilIcon: "...",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd",
      version: "1.27b",
    },
  },
  {
    mapId: "8",
    mapName: "M.Z.A Ruins El Amanecer Caído",
    description:
      "Mapa de estrategia estilo LTF y LTA inspirado en una linea alterna de que hubiera pasado si el continente de Teredar hubiera caido contra la plaga.",
    mapType: "Strategy",
    origin: "Repositorio",
    PlayersMax: "12",
    downloadLink: "https://worldofeditors.net/",
    autores: [
      {
        autor: {
          name: "ThyrlerstFel",
          information: "Edita 1 vez al año y no dejan de joder",
          perfilIcon: "https://ibb.co/5W3PBQzm",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://i.ibb.co/RmkPx9b/Mapita-En-Desarrollo.png",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "1.26a / 1.27b...",
    },
  },
  {
    mapId: "9",
    mapName: "Rey de la Colina 2.0",
    description:
      "Mapa de captura, pvp y administración de unidades tipo Autobattle.",
    mapType: "HA/AB",
    origin: "Repositorio",
    PlayersMax: "4",
    downloadLink:
      "https://discord.com/channels/721139249289887794/1408143559844040794",
    autores: [
      {
        autor: {
          name: "SoyMante",
          information: "Probando. Hasta que algo Sale.",
          perfilIcon: "",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd",
      version: "Reforged 2.0",
    },
  },
  {
    mapId: "10",
    mapName: "Proyecto Z",
    description:
      "Dota Killer con temática de Lima y personajes de la cultura social y política peruana con invitados latinoamericanos muy especiales.",
    mapType: "MOBA",
    origin: "Repositorio",
    PlayersMax: "10",
    downloadLink: "",
    autores: [
      {
        autor: {
          name: "Kuzakani, XShai",
          information: "En proceso",
          perfilIcon: "https://i.ibb.co/pB7kTRXt/ezgif-4-bd93aeb9be.gif",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "clasico sd",
      version: "0.1",
    },
  },
  {
    mapId: "11",
    mapName: "Golden Lands",
    description: "Campo de batalla 5vs5 recolecta recursos para ganar.",
    mapType: "Hero Arena/Moba",
    origin: "Repositorio",
    PlayersMax: "",
    downloadLink: "",
    autores: [
      {
        autor: {
          name: "-Manuel-",
          perfilIcon:
            "https://www.hiveworkshop.com/data/avatars/o/255/255007.jpg?1594563583",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://www.hiveworkshop.com/data/ratory-images/332/332246-42e94eb2e6b53cdc354b4aa594cf5fc6.png",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "..",
    },
  },
  {
    mapId: "12",
    mapName: "CASTLE INVASION",
    description:
      "Mapa RPG, WarChaser, Dungeon lineal (basado en la campaña Reinos y Kingdoms Battle).",
    mapType: "RPG, WarChaser, Dungeon",
    origin: "Repositorio",
    PlayersMax: "6",
    downloadLink:
      "https://drive.google.com/file/d/1n1can2t1b2VcROcNzLweoBISFZbBjVmB/view?usp=sharing",
    autores: [
      {
        autor: {
          name: "LocoM",
          information: "En proceso",
          perfilIcon: "https://i.ibb.co/60HgPFgC/zerglingxd.gif",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://i.ibb.co/YTQdCwdd/castle-Invasion.png",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "1.27/actual",
    },
  },
  {
    mapId: "13",
    mapName: "SKELETLAND",
    description:
      "Defiende la sucursal de recursos humanos del inframundo de las oleadas del sindicato de almas en pena.",
    mapType: "Castle defense, coop",
    origin: "Repositorio",
    PlayersMax: "10",
    downloadLink:
      "https://www.hiveworkshop.com/threads/skeletland-2-7-1e.363840",
    autores: [
      {
        autor: {
          name: "Nicoplox95",
          information: "Finalizado",
          perfilIcon:
            "https://www.hiveworkshop.com/data/avatars/l/319/319412.jpg?1756045902",
        },
        autorType: "creador",
      },
    ],
    Media: [
      {
        tipo: "imagen",
        url: "https://www.hiveworkshop.com/data/ratory-images/347/347805-bc01fa324985667df9ca6cabb5e6ac9e.jpg",
      },
    ],
    versionGame: {
      grafico: "clasico sd",
      version: "Reforged",
    },
  },
  {
    mapId: "6",
    mapName: "Caravana del Vacío",
    description:
      "Una campaña de Warcraft 3 tipo mele, dungeon crawler y puzzles",
    mapType: "Campaña",
    origin: "Repositorio",
    PlayersMax: "1",
    downloadLink:
      "https://discord.com/channels/721139249289887794/1303706203532296266",
    autores: [
      {
        autor: {
          name: "Edusx",
          information: "",
          perfilIcon: "",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "creador",
      version: "1.26",
    },
  },
  {
    mapId: "7",
    mapName: "Defiende el Arbolito",
    description:
      "Mapa estilo Hero Defense en donde defiendes un árbol de varios enemigos que intentan destruirlo",
    mapType: "Hero Defense",
    origin: "Repositorio",
    PlayersMax: "10",
    downloadLink: "https://www.epicwar.com/maps/329697/",
    autores: [
      {
        autor: {
          name: "Gabzo",
          information: "Se jubila y regresa a cada rato",
          perfilIcon: "https://i.ibb.co/HLF6c3vR",
        },
        autorType: "creador",
      },
    ],
    Media: [],
    versionGame: {
      grafico: "creador",
      version: "1.27b",
    },
  },
];
const page_size = 5;

const fetchPaginateData = async ({
  pageParam = 1,
}: QueryFunctionContext): Promise<MapData[]> => {
  const page = pageParam as number; // aca se establece el tipo de pageParam como number
  const start = (page - 1) * page_size;
  const end = start + page_size;
  try {
    return dataMapRaw.slice(start, end);
  } catch (error) {
    console.error("error en: ", error);
    return [];
  }
};

export default function useDataMapOther() {
  const query = useInfiniteQuery<MapData[]>({
    queryKey: ["dataMapsOther"],
    queryFn: fetchPaginateData,
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length === page_size; // en esta linea
      return hasMore ? allPages.length + 1 : undefined; // antes de retornar
    },
  });

  // const flatData = query.data?.pages.flat() || [];
  // const totalCount = flatData.length;

  return {
    ...query,
    totalAvailable: dataMapRaw.length,
  };
}
