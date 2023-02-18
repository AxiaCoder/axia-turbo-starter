import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { routes } from "../../../config/routes.config";

export const Register: React.FC = () => {
  return (
    <div className="clerk-box">
      <SignUp signInUrl={routes.login} afterSignUpUrl={routes.dashboard} />
    </div>
  );
};
