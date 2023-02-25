import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageFormExceptLocale, PageSchema, SelectData } from "@axia/data";
import { toast } from "react-toastify";
import { BackButton, Button, TextInput } from "@axia/ui";
import { routes } from "../../../config/routes.config";
import { TextArea } from "@axia/ui/components/forms/inputs/textarea.component";
import { useCreatePage } from "../../../hooks/pages/create-page.hook";
import { SelectField } from "@axia/ui/components/forms/inputs/select.component";
import { i18n } from "@axia/i18n";

interface IFormData extends PageFormExceptLocale {
  locale?: SelectData;
}

export const PagesAddScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutateAsync: create } = useCreatePage();
  const langs = i18n.getAvailableLanguages();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(PageSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      reference: "",
      locale: undefined,
    },
  });

  const onSubmit = async (data: IFormData) => {
    try {
      await create({
        title: data.title,
        content: data.content,
        slug: data.slug,
        reference: data.reference,
        locale: data.locale?.value ?? "en",
      });
      toast.success("La page a bien été crée.", {
        position: "top-center",
      });
      navigate(routes.admin.page.home);
    } catch (e) {
      toast.error("problem");
    }
  };

  return (
    <>
      <BackButton action={() => navigate(routes.admin.page.home)} />
      <h1>{t("admin.pages.add.title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <TextInput
            label={t("admin.pages.form.title")}
            id="title"
            placeholder={t("admin.pages.form.title") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="form-group">
          <TextArea
            label={t("admin.pages.form.content")}
            id="content"
            placeholder={t("admin.pages.form.content") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="form-group">
          <TextInput
            label={t("admin.pages.form.slug")}
            id="slug"
            placeholder={t("admin.pages.form.slug") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="form-group">
          <TextInput
            label={t("admin.pages.form.reference")}
            id="reference"
            placeholder={t("admin.pages.form.reference") ?? ""}
            required
            control={control}
          />
        </div>
        <div className="form-group">
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
        <Button
          type="submit"
          classType="success"
          label={t("admin.form.button.add")}
        />
      </form>
    </>
  );
};
