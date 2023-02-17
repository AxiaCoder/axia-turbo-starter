import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { AiTwotoneHome } from "react-icons/ai";

import { UserMenu } from "./user-menu.component";
import { routes } from "../../../config/routes.config";

export const Sidebar: React.FC = () => {
  const { user } = useUser();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="">
          <li>
            <Link
              to={routes.dashboard}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <AiTwotoneHome />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul className="">{user && <UserMenu />}</ul>
      </div>
    </aside>
  );
};
