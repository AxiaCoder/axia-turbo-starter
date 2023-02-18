import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "@axia/ui";

export const UserRouter: React.FC = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("account");
    }
  }, [user]);

  if (!isLoaded) return <Loader />;

  return <Outlet />;
};
