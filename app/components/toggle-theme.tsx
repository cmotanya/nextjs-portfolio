import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute  left-4 top-1/2 z-[500] -translate-y-1/2 text-6xl"
    >
      {theme == "dark" ? (
        <IconSun className="xs:size-8 md:size-6" />
      ) : (
        <IconMoonFilled className="xs:size-8 text-900 md:size-6" />
      )}
    </button>
  );
};
