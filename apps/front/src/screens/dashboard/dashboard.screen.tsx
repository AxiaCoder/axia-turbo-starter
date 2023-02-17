import React from "react";
import { useTranslation } from "react-i18next";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <h1>
      {t("front.dashboard")} : {t("front.test.subtitle")}
    </h1>
  );
};
