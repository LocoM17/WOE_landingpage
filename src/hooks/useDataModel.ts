import dataModel from "@/data/dataModel.json";
import { ModelData } from "@/interface/ModelData";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
const dataModelRaw = dataModel as ModelData[];

const page_size = 4;
const fetchPaginateData = async ({
  pageParam = 1,
}: QueryFunctionContext): Promise<ModelData[]> => {
  /**
   * @param end Calcula el índice final para la paginación basado en el índice de inicio actual y el tamaño de página.
   *
   * @remarks
   * Este valor se utiliza normalmente para determinar el punto final del slice al paginar un conjunto de datos.
   *
   * @param start - El índice de inicio de la página actual.
   * @param page_size - La cantidad de elementos por página.
   * @returns El índice que representa el final (exclusivo) de la página actual.
   */
  const page = pageParam as number;
  const start = (page - 1) * page_size;
  const end = start + page_size;
  try {
    return dataModelRaw.slice(start, end);
  } catch (error) {
    console.error("error en : ", error);
    return [];
  }
};

export default function useDataModel() {
  return useInfiniteQuery<ModelData[]>({
    queryKey: ["models"],
    queryFn: fetchPaginateData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length === page_size;
      return hasMore ? allPages.length + 1 : undefined;
    },
  });
}
