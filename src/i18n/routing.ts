import { defineRouting } from "next-intl/routing";

export const LOCALES = ["en", "km"] as const;
export type LOCALE = (typeof LOCALES)[number];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "en",
  localeCookie: {
    name: "locale",
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  },
});
