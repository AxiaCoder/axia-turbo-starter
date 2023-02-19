import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiErrors, Page } from "@axia/data";

export const useGetPageById = (id: number | string) =>
  useQuery({
    queryKey: [`page-${id}`],
    queryFn: async (): Promise<Page> => {
      try {
        const response = await axios.get(`/pages/${id}`);
        return response.data;
      } catch (e) {
        throw new ApiErrors(e);
      }
    },
  });
