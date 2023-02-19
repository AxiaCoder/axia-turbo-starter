import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPageById } from "../../../hooks/pages/get-page-by-id.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageFormExceptLocale, PageSchema } from "@axia/data";
import { useUpdatePage } from "../../../hooks/pages/update-page.hook";
import { toast } from "react-toastify";
import { BackButton, FormSubmit, TextInput } from "@axia/ui";
import { routes } from "../../../config/routes.config";
import { TextArea } from "@axia/ui/components/forms/inputs/textarea.component";
import { SelectField } from "@axia/ui/components/forms/inputs/select.component";
import { i18n } from "@axia/i18n";
import { SelectData } from "@axia/data";

interface IFormData extends PageFormExceptLocale {
  locale?: SelectData;
}

export const PagesEditScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const langs = i18n.getAvailableLanguages();
  const { data: page } = useGetPageById(id ?? "");
  const { mutateAsync: update } = useUpdatePage();
  const existingPage = useMemo(
    () =>
      page
        ? {
            title: page.title,
            content: page.content,
            slug: page.slug,
            reference: page.reference,
            locale: {
              value: page.locale,
              label: langs[page.locale] ?? "",
            },
          }
        : undefined,
    [page]
  );

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(PageSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      reference: "",
      locale: undefined,
    },
    values: existingPage,
  });

  const onSubmit = async (data: IFormData) => {
    try {
      if (!page) {
        toast.error("Aucune page existante.");
        return;
      }

      await update({
        id: page.id,
        data: {
          title: data.title,
          content: data.content,
          slug: data.slug,
          reference: data.reference,
          locale: data.locale?.value ?? "en",
        },
      });
      toast.success("La page a bien été modifié.", {
        position: "top-center",
      });
    } catch (e) {
      toast.error("problem");
    }
  };

  if (!page) {
    return null;
  }

  return (
    <>
      <BackButton action={() => navigate(routes.admin.page.home)} />
      <h1>{t("admin.pages.edit.title", { title: page.title })}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <TextInput
            label={t("admin.pages.form.title")}
            id="title"
            placeholder={t("admin.pages.form.title") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="mb-6">
          <TextArea
            label={t("admin.pages.form.content")}
            id="content"
            placeholder={t("admin.pages.form.content") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="mb-6">
          <TextInput
            label={t("admin.pages.form.slug")}
            id="slug"
            placeholder={t("admin.pages.form.slug") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="mb-6">
          <TextInput
            label={t("admin.pages.form.reference")}
            id="reference"
            placeholder={t("admin.pages.form.reference") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="mb-6">
          <SelectField
            label={t("admin.pages.form.locale")}
            id="locale"
            placeholder={t("admin.pages.form.locale") ?? ""}
            required
            control={control}
            opts={Object.keys(langs).map((key) => ({
              value: key,
              label: langs[key],
            }))}
          />
        </div>
        <FormSubmit label={t("admin.form.button.edit")} />
      </form>
    </>
  );
};
