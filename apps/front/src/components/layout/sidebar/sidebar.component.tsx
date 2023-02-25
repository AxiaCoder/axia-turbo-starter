import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { AiTwotoneHome } from "react-icons/ai";

import { UserMenu } from "./user-menu.component";
import { routes } from "../../../config/routes.config";

export const Sidebar: React.FC = () => {
  const { user } = useUser();

  return (
    <aside className="sidebar">
      <div className="content dark">
        <ul className="">
          <li>
            <Link to={routes.dashboard} className="menu-link">
              <AiTwotoneHome />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul className="">{user && <UserMenu />}</ul>
      </div>
    </aside>
  );
};
