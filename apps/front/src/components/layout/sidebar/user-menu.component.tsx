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
          <Link to={routes.admin.home} className="menu-link">
            <RiAdminLine />
            <span>{t("admin.title")}</span>
          </Link>
        </li>
      )}
      <li>
        <Link to={routes.account} className="menu-link">
          <AiOutlineUser />
          <span>{t("front.user.myaccount")}</span>
        </Link>
      </li>
      <li>
        <span className="logout">
          <AiOutlineLogout />
          <span>
            <SignOutButton signOutCallback={() => navigate(routes.home)} />
          </span>
        </span>
      </li>
    </>
  );
};
