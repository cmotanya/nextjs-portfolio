import { IconX, IconMenu2 } from "@tabler/icons-react";
import { cn } from "../utils/cn";

const MobileMenu = ({
  onclick,
  isMenuOpen,
}: {
  onclick: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        "ml-auto rounded-md p-2 md:hidden",
        isMenuOpen ? "bg-red-500" : "bg-primary-clr",
      )}
    >
      {isMenuOpen ? (
        <IconX size={30} />
      ) : (
        <IconMenu2 size={30} className="text-300" />
      )}
    </button>
  );
};

export default MobileMenu;
