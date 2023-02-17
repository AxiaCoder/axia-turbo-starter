import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SignedOut, useUser } from "@clerk/clerk-react";
import { Loader } from "@axia/ui";

export const PublicRouter: React.FC = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("account");
    }
  }, [user]);

  if (!isLoaded) return <Loader />;

  return (
    <SignedOut>
      <Outlet />
    </SignedOut>
  );
};
