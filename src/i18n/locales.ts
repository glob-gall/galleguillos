import "server-only";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("./en-us.json").then((mod) => mod.default),
  pt: () => import("./pt-br.json").then((mod) => mod.default),
};

export const getDictionary = async (locale: string) =>
  (dictionaries?.[locale as Locale] ?? dictionaries[defaultLocale])();
