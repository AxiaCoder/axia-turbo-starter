import React from "react";
import { Routes } from "@axia/data";
import { Login, Register } from "../../screens";
import { routes } from "../../config/routes.config";

export const UsersRoute: Routes[] = [
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
];
