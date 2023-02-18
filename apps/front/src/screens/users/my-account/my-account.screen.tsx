import React from "react";
import { UserProfile } from "@clerk/clerk-react";

export const MyAccount: React.FC = () => (
  <>
    <div className="clerk-dashboard-box">
      <UserProfile />
    </div>
  </>
);
