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
import { routes } from "../../config/routes.config";
import { Home } from "../../screens/website/home.screen";

export const router: Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <DefaultError />,
    children: [
      {
        path: "",
        element: <PublicRouter />,
        children: [
          {
            path: routes.home,
            element: <Home />,
          },
          ...UsersRoute,
        ],
      },
      {
        path: "/",
        element: <Layout />,
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
