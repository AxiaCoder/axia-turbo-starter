import React, { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  initAxios,
  initAxiosUserHeader,
  initQueryClient,
} from "../../config/api.config";
import { useUser, useSession } from "@clerk/clerk-react";

interface IApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: React.FC<IApiProviderProps> = ({
  children,
}: IApiProviderProps) => {
  const { session } = useSession();
  const { user } = useUser();
  const queryClient = initQueryClient();
  initAxios();

  useEffect(() => {
    if (user && session) {
      initAxiosUserHeader(user.id);
    }
  }, [session, user]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
