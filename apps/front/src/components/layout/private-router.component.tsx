import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { routes } from "../../config/routes.config";
import { Loader } from "@axia/ui";
import { User } from "@axia/data";
import { useGetMe } from "../../hooks/users/get-me.hook";
import { Layout } from "./layout.component";

export const UserContext = React.createContext<{
  user: User | null;
}>({ user: null });

export const PrivateRouter: React.FC = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMe();

  useEffect(() => {
    if (!user && isLoaded) {
      navigate(routes.login);
    }
  }, [user]);

  if (!isLoaded || isLoading) return <Loader />;

  return (
    <UserContext.Provider value={{ user: data as User }}>
      <Layout>
        <Outlet />
      </Layout>
    </UserContext.Provider>
  );
};
