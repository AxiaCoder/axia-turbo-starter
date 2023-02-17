import React from "react";
import { useTranslation } from "react-i18next";

export const DefaultError: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("errors.router.notFound.title")}</h1>
      <p>{t("errors.router.notFound.description")}</p>
    </>
  );
};
