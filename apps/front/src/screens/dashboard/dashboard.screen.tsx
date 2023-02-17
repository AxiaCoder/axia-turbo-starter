import React from "react";
import { useTranslation } from "react-i18next";
import { useGetPageByRef } from "../../hooks/pages/get-page-by-ref.hook";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { data: page } = useGetPageByRef("dashboard");

  return (
    <>
      <h1>{t("front.dashboard")}</h1>
      {page && (
        <>
          <h2>{page.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </>
      )}
    </>
  );
};
