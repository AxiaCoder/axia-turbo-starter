import React from "react";
import { SignUp } from "@clerk/clerk-react";

export const Register: React.FC = () => {
  return (
    <div className="clerk-box">
      <SignUp signInUrl={"/login"} />
    </div>
  );
};
