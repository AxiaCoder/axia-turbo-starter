import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "../../config/routes.config";
import { UserContext } from "./private-router.component";

export const AdminRouter: React.FC = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);

  useEffect(() => {
    if (!user || user.apiUser.role !== "admin") {
      navigate(routes.dashboard);
    }
  }, [user]);

  return <Outlet />;
};
