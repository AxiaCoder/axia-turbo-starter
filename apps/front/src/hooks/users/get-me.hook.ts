import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiErrors, User } from "@axia/data";

export const useGetMe = () =>
  useQuery({
    queryKey: ["user-me"],
    queryFn: async (): Promise<User> => {
      try {
        const response = await axios.get("/users/me");
        return response.data;
      } catch (e) {
        throw new ApiErrors(e);
      }
    },
  });
