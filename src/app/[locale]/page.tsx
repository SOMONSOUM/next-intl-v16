import { LocaleSwitcher } from "@/components/local-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">
        {t("title")}
      </h1>
      <div className="absolute top-4 right-4">
        <LocaleSwitcher />
      </div>
      <div className="absolute top-4 left-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
