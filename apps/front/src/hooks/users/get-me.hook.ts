import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiErrors } from "@axia/data";
import { UserResource } from "@clerk/types";

export const useGetMe = () =>
  useQuery({
    queryKey: ["user-me"],
    queryFn: async (): Promise<UserResource> => {
      try {
        const response = await axios.get("/users/me");
        return response.data;
      } catch (e) {
        throw new ApiErrors(e);
      }
    },
  });
