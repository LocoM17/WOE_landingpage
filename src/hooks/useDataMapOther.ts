import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
//json de origen
//interface
export interface MapData {
  idOtherMap: string;
  name: string;
  descripcion: string;
  imgUrl: string;
  downloader: string;
}
const dataMapRaw: MapData[] = [
  {
    idOtherMap: "21",
    name: "LuchaDeHeroes",
    descripcion:
      "Battle Royale sin habilidades iniciales, obtenidas mediante ítems en el mapa.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "22",
    name: "Panda Wars",
    descripcion: "Hero Arena rápido y sin balance ambientado en un mapa 32x32.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "23",
    name: "Pulpines Party - Proyecto WOE",
    descripcion:
      "Espacio de conversación y desarrollo de ideas dentro del ecosistema WOE.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "24",
    name: "MortalCraft",
    descripcion:
      "Mapa estilo AoS/Hero Arena con enfoque en combate entre héroes.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "25",
    name: "CASTLE INVASION (RPG)",
    descripcion:
      "Dungeon RPG estilo WarChaser con modos singleplayer y multiplayer.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "26",
    name: "Caravana del Vacío (beta)",
    descripcion: "Campaña en desarrollo con enfoque narrativo y exploración.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "28",
    name: "Village Protectors (VP)",
    descripcion: "Hero Defense / Supervivencia con mecánicas cooperativas.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "29",
    name: "Siege of Dalaran",
    descripcion:
      "Espacio para compartir ideas de mapas y mecánicas en torno a Dalaran.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
  },
  {
    idOtherMap: "30",
    name: "La Gran Guerra",
    descripcion: "Campaña que reinventa Warcraft II: Orcos vs Humanos.",
    imgUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/875707.jpg?maxWidth=1050",
    downloader: "—",
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
