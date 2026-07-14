"use client";
import LanguageToggle from "@/components/language-toggle";
import { Locale } from "@/i18n/locales";

type HeaderProps = {
  locale: Locale;
};
export default function Header({ locale }: HeaderProps) {
  return (
    <div className="container flex mx-auto py-18 md:py-4 px-10 items-center justify-end ">
      <LanguageToggle currentLocale={locale} />
    </div>
  );
}
