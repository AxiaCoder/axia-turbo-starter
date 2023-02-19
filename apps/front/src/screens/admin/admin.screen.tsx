import React from "react";
import { useTranslation } from "react-i18next";
import { routes } from "../../config/routes.config";
import { Link } from "react-router-dom";

export const AdminScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("admin.title")}</h1>
      <Link to={routes.admin.page.home}>{t("admin.pages.title")}</Link>
    </>
  );
};
