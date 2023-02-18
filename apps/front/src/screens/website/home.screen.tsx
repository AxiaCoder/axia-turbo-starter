import React from "react";
import { useTranslation } from "react-i18next";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useGetPageByRef } from "../../hooks/pages/get-page-by-ref.hook";
import { routes } from "../../config/routes.config";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { data: page } = useGetPageByRef("homepage");

  return (
    <>
      <h1>{t("front.homepage.title")}</h1>
      {page && (
        <>
          <h2>{page.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </>
      )}
      <SignedIn>
        <Link to={routes.dashboard} className="text-blue-500">
          {t("front.homepage.link.dashboard")}
        </Link>
      </SignedIn>
      <SignedOut>
        <Link to={routes.login} className="text-blue-500">
          {t("front.homepage.link.login")}
        </Link>
      </SignedOut>
    </>
  );
};
