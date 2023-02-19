import { Primitive } from "type-fest";

export const pathFormat = (
  path: string,
  options: { [key: string]: Primitive }
) => {
  let slug = path;

  for (const key in options) {
    if (options[key]) {
      slug = slug.replace(`:${key}`, options[key]?.toString() ?? "");
    }
  }

  return slug;
};
