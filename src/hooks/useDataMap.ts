import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
//json de origen
import dataMap from "@/data/dataMap.json";
//interface
import { MapData } from "@/interface/MapData";

const dataMapRaw = dataMap as MapData[];

const page_size = 4;
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

export default function useDataMap() {
  return useInfiniteQuery<MapData[]>({
    queryKey: ["maps"],
    queryFn: fetchPaginateData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length === page_size;
      return hasMore ? allPages.length + 1 : undefined;
    },
  });
}
