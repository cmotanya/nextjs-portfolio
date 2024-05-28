import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute left-4 top-4 z-[500] text-6xl"
    >
      {theme == "dark" ? (
        <IconSun className="xs:size-8 md:size-6" />
      ) : (
        <IconMoonFilled className="xs:size-8 md:size-6" />
      )}
    </button>
  );
};
