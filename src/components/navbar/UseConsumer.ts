import axios from "axios";
import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";

interface Personaje {
  id: number;
  name: string;
  image: string;
}
interface ApiResponse {
  info: {
    next: string | null;
    prev: string | null;
  };
  results: Personaje[];
}

const personajesResponse = async ({
  pageParam = 1,
}: QueryFunctionContext): Promise<ApiResponse> => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${pageParam}`
  );
  return data;
};

export function useConsumer() {
  return useInfiniteQuery<ApiResponse>({
    queryKey: ["personajes"],
    queryFn: personajesResponse,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        // Si hay más páginas, devuelve la URL de la siguiente página

        const nextURL = new URL(lastPage.info.next);
        return nextURL.searchParams.get("page");
      }
      return undefined; // No hay más páginas
    },
  });
}
