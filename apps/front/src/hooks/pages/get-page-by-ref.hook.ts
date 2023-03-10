import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiErrors, Page } from "@axia/data";

export const useGetPageByRef = (ref: string) =>
  useQuery({
    queryKey: [`page-${ref}`, ref],
    queryFn: async (): Promise<Page> => {
      try {
        const response = await axios.get(`/pages-by-ref/${ref}`);
        return response.data;
      } catch (e) {
        throw new ApiErrors(e);
      }
    },
  });
