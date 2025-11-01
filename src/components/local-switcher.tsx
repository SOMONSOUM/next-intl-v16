"use client";

import { useParams } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";
import { LOCALE, LOCALES } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const flags: Record<
  LOCALE,
  {
    flag: string;
    title: string;
    className?: string;
  }
> = {
  km: {
    flag: "kh",
    title: "ខ្មែរ",
  },
  en: {
    flag: "us",
    title: "EN",
  },
};

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const { locale }: { locale: LOCALE } = useParams();
  const router = useRouter();

  const updateLocale = (locale: LOCALE) => {
    router.push(pathname, { locale });
  };

  return (
    <Select defaultValue={locale} onValueChange={updateLocale}>
      <SelectTrigger
        aria-label="Select language"
        className="w-auto min-w-[90px] bg-transparent"
      >
        <div className="flex items-center gap-2 uppercase">
          <ReactCountryFlag
            svg
            className="text-xl"
            countryCode={flags[locale].flag}
            title={flags[locale].flag}
          />
          <span>{flags[locale].title}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((l) => (
          <SelectItem key={l} value={l}>
            <div className="flex items-center gap-2 uppercase">
              <ReactCountryFlag
                svg
                className="text-xl"
                countryCode={flags[l].flag}
                title={flags[l].flag}
              />
              <span className={flags[l].className}>{flags[l].title}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
