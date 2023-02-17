import React from "react";
import { ApiProvider } from "../components/layout/api.provider";
import { RouterProvider } from "react-router-dom";
import { router } from "../libs/router/router";

import { ClerkProvider } from "@clerk/clerk-react";
import { frFR } from "@clerk/localizations";

export const App: React.FC = () => {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey} localization={frFR}>
      <ApiProvider>
        <RouterProvider router={router} />
      </ApiProvider>
    </ClerkProvider>
  );
};
