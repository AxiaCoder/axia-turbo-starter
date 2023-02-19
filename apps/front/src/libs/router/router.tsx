import React from "react";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import { Router } from "@remix-run/router/dist/router";
import { DefaultError } from "../../screens";
import { PrivateRouter } from "../../components/layout/private-router.component";
import { PrivatesRoute } from "./privates.route";
import { UsersRoute } from "./users.route";
import { UserRouter } from "../../components/layout/user-router.component";
import { PublicRoute } from "./public.route";
import { AdminRouter } from "../../components/layout/admin-router.component";
import { AdminRoute } from "./admin.route";

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
        element: <PrivateRouter />,
        children: [
          ...PrivatesRoute,
          {
            element: <AdminRouter />,
            children: [...AdminRoute],
          },
        ],
      },
    ],
  },
]);
