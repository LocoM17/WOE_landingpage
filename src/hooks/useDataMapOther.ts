import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
//json de origen
//interface
export interface MapData {
  idOtherMap: string;
  name: string;
  descripcion: string;
  imgUrl: string;
}
const dataMapRaw: MapData[] = [
  {
    idOtherMap: "1",
    name: "Ruins of Azkaron",
    descripcion: "Mapa de batalla en ruinas ancestrales.",
    imgUrl: "https://www.hiveworkshop.com/media/parc-png.142222/full",
  },
  {
    idOtherMap: "2",
    name: "Frozen Kingdom",
    descripcion: "Un reino congelado lleno de desafíos.",
    imgUrl: "https://www.hiveworkshop.com/media/parc-png.142222/full",
  },
  {
    idOtherMap: "3",
    name: "Mystic Forest",
    descripcion: "Bosque encantado donde nada es lo que parece.",
    imgUrl: "https://www.hiveworkshop.com/media/garrosh-jpg.142198/full",
  },
  {
    idOtherMap: "4",
    name: "Desert Siege",
    descripcion: "Lucha por recursos en una tormenta de arena.",
    imgUrl: "https://www.hiveworkshop.com/media/garrosh-jpg.142198/full",
  },
  {
    idOtherMap: "5",
    name: "Volcano Core",
    descripcion: "Batallas dentro del corazón de un volcán.",
    imgUrl: "",
  },
  {
    idOtherMap: "6",
    name: "Nightfall Keep",
    descripcion: "Fortaleza sumida en la oscuridad.",
    imgUrl:
      "https://www.hiveworkshop.com/media/qq%E5%9B%BE%E7%89%8720250529212046-png.142195/full",
  },
  {
    idOtherMap: "7",
    name: "Oceanic Front",
    descripcion: "Combates navales en aguas turbulentas.",
    imgUrl:
      "https://www.hiveworkshop.com/media/qq%E5%9B%BE%E7%89%8720250529212046-png.142195/full",
  },
  {
    idOtherMap: "8",
    name: "Shadow Caves",
    descripcion: "Mazmorras oscuras llenas de trampas.",
    imgUrl:
      "https://www.hiveworkshop.com/media/qq%E5%9B%BE%E7%89%8720250529212046-png.142195/full",
  },
  {
    idOtherMap: "9",
    name: "Blazing Tundra",
    descripcion: "Un paisaje gélido con fuego oculto.",
    imgUrl: "https://www.hiveworkshop.com/media/yumapath-png.142210/full",
  },
  {
    idOtherMap: "10",
    name: "Sky Temple",
    descripcion: "Templo flotante entre las nubes.",
    imgUrl: "https://www.hiveworkshop.com/media/worgen-lineup-png.142199/full",
  },
  {
    idOtherMap: "11",
    name: "Ashen Valley",
    descripcion: "Valle cubierto de ceniza volcánica.",
    imgUrl: "https://www.hiveworkshop.com/media/worgen-lineup-png.142199/full",
  },
  {
    idOtherMap: "12",
    name: "Crimson Arena",
    descripcion: "Combates a muerte en la arena sangrienta.",
    imgUrl:
      "https://www.hiveworkshop.com/media/qq%E5%9B%BE%E7%89%8720250529212046-png.142195/full",
  },
  {
    idOtherMap: "13",
    name: "Twilight Marsh",
    descripcion: "Pantano iluminado por luces místicas.",
    imgUrl:
      "https://epicwar.s3.eu-central-003.backblazeb2.com/mapimages/1397/355388.jpg",
  },
  {
    idOtherMap: "14",
    name: "Stormwatch Tower",
    descripcion: "Torre abandonada bajo una tormenta eterna.",
    imgUrl:
      "https://epicwar.s3.eu-central-003.backblazeb2.com/mapimages/1390/355284.jpg",
  },
  {
    idOtherMap: "15",
    name: "Hollow Mountain",
    descripcion: "Misterios dentro de una montaña hueca.",
    imgUrl:
      "https://epicwar.s3.eu-central-003.backblazeb2.com/mapimages/1389/355274.jpg",
  },
  {
    idOtherMap: "16",
    name: "Emerald Plains",
    descripcion: "Campos verdes llenos de emboscadas.",
    imgUrl:
      "https://epicwar.s3.eu-central-003.backblazeb2.com/mapimages/1385/355229.jpg",
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

  const flatData = query.data?.pages.flat() || [];
  // const totalCount = flatData.length;

  return {
    ...query,
    totalAvailable: dataMapRaw.length,
  };
}
