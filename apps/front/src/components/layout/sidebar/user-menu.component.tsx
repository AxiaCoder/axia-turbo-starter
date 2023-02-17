import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { SignOutButton } from "@clerk/clerk-react";
import { routes } from "../../../config/routes.config";
import { useTranslation } from "react-i18next";

export const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
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
            <SignOutButton />
          </span>
        </span>
      </li>
    </>
  );
};
