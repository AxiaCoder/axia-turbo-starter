import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { routes } from "../../config/routes.config";
import { Loader } from "@axia/ui";

export const PrivateRouter: React.FC = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(routes.login);
    }
  }, [user]);

  if (!isLoaded) return <Loader />;

  return (
    <SignedIn>
      <Outlet />
    </SignedIn>
  );
};
