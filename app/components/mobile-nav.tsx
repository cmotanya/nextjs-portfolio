import {
  IconArrowRight,
  IconFile,
  IconDeviceMobile,
} from "@tabler/icons-react";
import Link from "next/link";
import { nav_items } from "../lib/global_links";
import { cn } from "../utils/cn";
import { useEffect } from "react";

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
          ? "bg-800 text-neutral-300 md:bg-transparent"
          : "text-neutral-400/50",
      )}
    >
      {children}
    </Link>
  );
}

const MobileNav = ({
  isMenuOpen,
  activeLink,
  handleClick,
}: {
  isMenuOpen: boolean;
  handleClick: (link: string) => void;
  activeLink: string;
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isMenuOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "absolute right-0 top-[4.2rem] z-40 h-[calc(100vh-4rem)] min-h-svh w-full overflow-hidden rounded-md bg-900 transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full",
        !isMenuOpen && "hidden",
      )}
    >
      <ul className="flex flex-col items-center gap-10 pt-10 xs:gap-8 sm:pt-20">
        {nav_items.map((item, index) => (
          <li
            key={item.name}
            className="relative flex h-[5.5ch] w-[23ch] justify-center overflow-hidden py-2"
          >
            <NavLink
              href={item.link}
              active={activeLink === item.name}
              onClick={() => handleClick(item.name)}
            >
              <div
                className={cn(
                  "transform-transition flex items-center gap-x-3 text-400 duration-300 active:translate-x-2",
                  isMenuOpen && `delay-${index * 100}`,
                )}
              >
                <span>{item.name}</span>
                <span className="rounded-full bg-700 p-2 text-200">
                  <IconArrowRight />
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* --- Mobile button link for contact. --- */}
      <button className="absolute bottom-[5.5rem] left-1/2 right-0 w-max -translate-x-1/2 rounded-md bg-neutral-800/50 px-4 py-3 text-2xl uppercase text-400 md:hidden">
        <Link
          href="./assets/Resume.pdf"
          target="_blank"
          passHref={true}
          className="flex items-center gap-2"
        >
          download resume <IconFile />
        </Link>
      </button>

      {/* Download resume for mobile devices. */}
      <button className="absolute bottom-[10rem] left-1/2 right-0 w-max -translate-x-1/2 rounded-md bg-neutral-800/50 px-4 py-3 text-2xl uppercase text-400 md:hidden">
        <Link
          href="./assets/Resume.pdf"
          target="_blank"
          passHref={true}
          className="flex items-center gap-2"
        >
          contact me <IconDeviceMobile />
        </Link>
      </button>
    </nav>
  );
};

export default MobileNav;
