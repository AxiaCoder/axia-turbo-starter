import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiErrors, Page } from "@axia/data";

export const useGetPages = () =>
  useQuery({
    queryKey: [`pages`],
    queryFn: async (): Promise<Page[]> => {
      try {
        const response = await axios.get(`/pages`);
        return response.data;
      } catch (e) {
        throw new ApiErrors(e);
      }
    },
  });
