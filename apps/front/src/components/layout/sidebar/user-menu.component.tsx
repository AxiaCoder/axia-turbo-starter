import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { SignOutButton } from "@clerk/clerk-react";
import { routes } from "../../../config/routes.config";
import { useTranslation } from "react-i18next";
import { RiAdminLine } from "react-icons/all";
import { UserContext } from "../private-router.component";

export const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  console.log(user, user?.apiUser.role);

  return (
    <>
      {user && user.apiUser.role === "admin" && (
        <li>
          <Link
            to={routes.admin.home}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <RiAdminLine />
            <span className="ml-3">{t("admin.title")}</span>
          </Link>
        </li>
      )}
      <li>
        <Link
          to={routes.account}
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <AiOutlineUser />
          <span className="ml-3">{t("front.user.myaccount")}</span>
        </Link>
      </li>
      <li>
        <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full h-full">
          <AiOutlineLogout />
          <span className="flex-1 ml-3 whitespace-nowrap">
            <SignOutButton signOutCallback={() => navigate(routes.home)} />
          </span>
        </span>
      </li>
    </>
  );
};
