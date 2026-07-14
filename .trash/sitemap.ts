import { MetadataRoute } from "next";
import { locales } from "../i18n/locales";

// TODO: replace with your real production domain
const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Add one entry per (locale, route) pair here as your app grows.
  // Each entry declares its language siblings via `alternates.languages`
  // so Google can understand the EN/PT relationship between URLs.
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}`])),
    },
  }));
}
