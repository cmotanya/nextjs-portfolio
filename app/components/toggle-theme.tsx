import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="z-[500] text-6xl">
      {theme == "dark" ? (
        <IconSun className="xs:size-8 md:size-6" />
      ) : (
        <IconMoonFilled className="text-900 xs:size-8 md:size-6" />
      )}
    </button>
  );
};
