import React from "react";
import { Routes } from "@axia/data";
import { routes } from "../../config/routes.config";
import { AdminScreen } from "../../screens/admin/admin.screen";
import {
  PagesAddScreen,
  PagesScreen,
  PagesEditScreen,
} from "../../screens/admin/pages";

export const AdminRoute: Routes[] = [
  {
    path: routes.admin.home,
    element: <AdminScreen />,
  },
  {
    path: routes.admin.page.home,
    element: <PagesScreen />,
  },
  {
    path: routes.admin.page.add,
    element: <PagesAddScreen />,
  },
  {
    path: routes.admin.page.edit,
    element: <PagesEditScreen />,
  },
];
