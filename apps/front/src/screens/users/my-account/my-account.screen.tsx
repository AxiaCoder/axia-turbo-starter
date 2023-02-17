import React, { useEffect } from "react";
import { SignUp, UserProfile, useUser } from "@clerk/clerk-react";

export const MyAccount: React.FC = () => (
  <>
    <div className="clerk-dashboard-box">
      <UserProfile only="account" />
    </div>
  </>
);
