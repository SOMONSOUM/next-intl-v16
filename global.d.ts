import { LOCALE, routing } from "@/i18n/routing";
import messages from "./src/i18n/messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: LOCALE;
    Messages: typeof messages;
  }
}
