import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeletePage = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number | string) => axios.delete(`/pages/${id}`),
    onSuccess: () => {
      client.invalidateQueries([`pages`]);
    },
  });
};
