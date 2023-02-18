import React from "react";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import { Router } from "@remix-run/router/dist/router";
import { DefaultError } from "../../screens";
import { Layout } from "../../components/layout/layout.component";
import { PrivateRouter } from "../../components/layout/private-router.component";
import { PrivatesRoute } from "./privates.route";
import { UsersRoute } from "./users.route";
import { UserRouter } from "../../components/layout/user-router.component";
import { PublicRoute } from "./public.route";

export const router: Router = createBrowserRouter([
  {
    errorElement: <DefaultError />,
    children: [
      ...PublicRoute,
      {
        element: <UserRouter />,
        children: [...UsersRoute],
      },
      {
        element: <Layout />,
        children: [
          {
            element: <PrivateRouter />,
            children: PrivatesRoute,
          },
        ],
      },
    ],
  },
]);
