import React from "react";
import { Routes } from "@axia/data";
import { Dashboard } from "../../screens";
import { MyAccount } from "../../screens/users/my-account/my-account.screen";
import { routes } from "../../config/routes.config";

export const PrivatesRoute: Routes[] = [
  {
    path: routes.dashboard,
    element: <Dashboard />,
  },
  {
    path: routes.account,
    element: <MyAccount />,
  },
];
