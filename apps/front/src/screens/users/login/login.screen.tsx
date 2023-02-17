import React from "react";
import { SignIn } from "@clerk/clerk-react";

export const Login: React.FC = () => {
  return (
    <div className="clerk-box">
      <SignIn signUpUrl={"/register"} />
    </div>
  );
};
