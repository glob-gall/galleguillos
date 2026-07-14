"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Locale } from "@/i18n/locales";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type LanguageToggleProps = {
  currentLocale: Locale;
};

export default function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const router = useRouter();

  function pathForLocale(target: Locale) {
    return `/${target}`;
  }

  const setLanguage = useCallback((l: Locale) => {
    router.push(pathForLocale(l));
  }, []);
  return (
    <ToggleGroup
      type="single"
      defaultValue={currentLocale}
      onValueChange={(value) => setLanguage(value as Locale)}
    >
      <ToggleGroupItem className="text-2xl" value="en">
        🇺🇲
      </ToggleGroupItem>
      <ToggleGroupItem className="text-2xl" value="pt">
        🇧🇷
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
