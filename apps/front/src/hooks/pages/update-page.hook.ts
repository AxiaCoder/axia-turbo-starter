import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PageEditData } from "@axia/data";

type IMutation = {
  id: number;
  data: PageEditData;
};

export const useUpdatePage = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (req: IMutation) => axios.put(`/pages/${req.id}`, req.data),
    onSuccess: (result) => {
      client.invalidateQueries([`page-${result.data.id}`]);
    },
  });
};
