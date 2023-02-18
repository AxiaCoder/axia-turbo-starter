import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { routes } from "../../../config/routes.config";

export const Login: React.FC = () => {
  return (
    <div className="clerk-box">
      <SignIn signUpUrl={routes.register} afterSignInUrl={routes.dashboard} />
    </div>
  );
};
