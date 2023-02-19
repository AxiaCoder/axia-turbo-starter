import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PageForm } from "@axia/data";

export const useCreatePage = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (req: PageForm) => axios.post(`/pages`, req),
    onSuccess: () => {
      client.invalidateQueries([`pages`]);
    },
  });
};
