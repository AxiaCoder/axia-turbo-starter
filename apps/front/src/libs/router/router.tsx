import React from "react";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import { Router } from "@remix-run/router/dist/router";
import { DefaultError } from "../../screens";
import { Layout } from "../../components/layout/layout.component";
import { PrivateRouter } from "../../components/layout/private-router.component";
import { PrivatesRoute } from "./privates.route";
import { UsersRoute } from "./users.route";
import { PublicRouter } from "../../components/layout/public-router.component";

export const router: Router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <PublicRouter />,
        children: [...UsersRoute],
      },
      {
        path: "/",
        element: <Layout />,
        errorElement: <DefaultError />,
        children: [
          {
            path: "",
            element: <PrivateRouter />,
            children: PrivatesRoute,
          },
        ],
      },
    ],
  },
]);
