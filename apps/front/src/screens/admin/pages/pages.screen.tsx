import React from "react";
import { useTranslation } from "react-i18next";
import { useGetPages } from "../../../hooks/pages/get-pages.hook";
import { formatDate, Page, pathFormat } from "@axia/data";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../config/routes.config";
import { AiFillDelete, AiFillEdit } from "react-icons/all";
import { useDeletePage } from "../../../hooks/pages/delete-page.hook";
import { BackButton, ModalComponent } from "@axia/ui";
import { toast } from "react-toastify";

export const PagesScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: pages } = useGetPages();
  const { mutateAsync: deletePage } = useDeletePage();

  const [selectedPage, setSelectedPage] = React.useState<Page | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleDelete = async (page: Page) => {
    setSelectedPage(page);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <BackButton action={() => navigate(routes.admin.home)} />
      <h1>{t("admin.pages.title")}</h1>
      <Link
        to={routes.admin.page.add}
        className="p-2 mt-2 mb-2 inline-block border"
      >
        {t("admin.pages.add.title")}
      </Link>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="border-b-2">
            <th className="p-2">{t("admin.table.id")}</th>
            <th className="p-2">{t("admin.pages.table.title")}</th>
            <th className="p-2">{t("admin.pages.table.slug")}</th>
            <th className="p-2">{t("admin.pages.table.reference")}</th>
            <th className="p-2">{t("admin.table.locale")}</th>
            <th className="p-2">{t("admin.table.createdAt")}</th>
            <th className="p-2">{t("admin.table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {pages?.map((page) => (
            <tr key={page.id}>
              <td className="p-2">{page.id}</td>
              <td className="p-2">{page.title}</td>
              <td className="p-2">{page.slug}</td>
              <td className="p-2">{page.reference}</td>
              <td className="p-2">{page.locale}</td>
              <td className="p-2">{formatDate(page.created_at)}</td>
              <td className="p-2 flex">
                <Link
                  to={pathFormat(routes.admin.page.edit, { id: page.id })}
                  className="pl-2 pr-2"
                >
                  <AiFillEdit />
                </Link>
                <button
                  onClick={() => handleDelete(page)}
                  className="pl-2 pr-2 text-red-500"
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPage && (
        <ModalComponent
          title={t("admin.form.delete.title", { title: selectedPage.title })}
          open={openDeleteModal}
          close={() => {
            setOpenDeleteModal(false);
            setSelectedPage(null);
          }}
          action={async () => {
            try {
              await deletePage(selectedPage.id);
              toast.success("La page a bien été supprimé.", {
                position: "top-center",
              });
            } catch (e) {
              toast.error("problem");
            } finally {
              setOpenDeleteModal(false);
              setSelectedPage(null);
            }
          }}
          actionLabel={t("admin.form.delete.action") ?? ""}
        >
          {t("admin.form.delete.message")}
        </ModalComponent>
      )}
    </>
  );
};
