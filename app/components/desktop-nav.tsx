import Link from "next/link";
import { nav_items } from "../lib/global_links";
import { cn } from "../utils/cn";

function NavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group absolute top-1/2 flex h-full w-full -translate-y-1/2 items-center justify-center scroll-smooth rounded-md text-3xl hover:text-300 md:text-2xl",
        active
          ? "bg-800 font-semibold text-300 dark:font-normal md:bg-transparent"
          : "font-semibold text-800 dark:font-normal dark:text-neutral-400/50",
      )}
    >
      {children}
    </Link>
  );
}

const DesktopNav = ({
  isActive,
  handleClick,
}: {
  isActive: string;
  handleClick: (name: string) => void;
}) => {
  return (
    <nav className="relative md:py-0">
      <ul className="hidden gap-5 md:flex">
        {nav_items.map((item) => (
          <li
            key={item.name}
            className="relative flex h-[3.5ch] w-[13ch] justify-center overflow-hidden py-2"
          >
            <NavLink
              href={item.link}
              active={isActive === item.name}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
