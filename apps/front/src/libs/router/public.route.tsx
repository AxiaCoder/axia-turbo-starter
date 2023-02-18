import { Routes } from "@axia/data";
import { routes } from "../../config/routes.config";
import { Home } from "../../screens/website/home.screen";

export const PublicRoute: Routes[] = [
  {
    path: routes.home,
    element: <Home />,
  },
];
