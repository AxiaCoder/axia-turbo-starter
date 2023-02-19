import { z } from "zod";
import { Except } from "type-fest";

export interface Page {
  id: number;
  reference: string;
  locale: string;
  title: string;
  content: string;
  slug: string;
  created_at: Date;
}

export type PageForm = Except<Page, "id" | "created_at">;
export type PageFormExceptLocale = Except<PageForm, "locale">;
export type PageEditData = Partial<PageForm>;

export const PageSchema = z.object({
  reference: z.string(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
  locale: z.object({
    value: z.string(),
    label: z.string(),
  }),
});
