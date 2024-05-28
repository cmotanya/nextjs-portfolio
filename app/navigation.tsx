"use client";

import { useRef, useState } from "react";
import { nav_items } from "./lib/global_links";
import { ThemeToggle } from "./components/toggle-theme";
import MobileNav from "./components/mobile-nav";
import DesktopNav from "./components/desktop-nav";
import MobileMenu from "./mobile-hamburger-menu";
import Link from "next/link";

export default function Navigation() {
  const [isActive, setIsActive] = useState(nav_items[0].name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);

  /* Function that activates navigation link items. */
  const handleClick = (link: string) => {
    setIsActive(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked.
  };

  return (
    <header
      ref={headerRef}
      className="absolute top-0 z-30 flex w-full flex-row items-center justify-between p-3 text-neutral-200 md:bg-800"
    >
      {/* --- Theme toggle. --- */}
      <ThemeToggle />

      {/* Hamburger menu icon */}
      <MobileMenu
        onclick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      {/* Mobile setup navigation. */}
      <MobileNav
        isMenuOpen={isMenuOpen}
        activeLink={isActive}
        handleClick={handleClick}
      />

      {/* Desktop setup navigation. */}
      <DesktopNav isActive={isActive} handleClick={handleClick} />

      {/* --- Button link for contact me --- */}
      <button className="rounded-m hidden items-center justify-center  rounded-sm px-4 py-2 text-300 md:flex">
        <Link
          href="./assets/Resume.pdf"
          target="_blank"
          passHref={true}
          className="flex items-center gap-1 rounded-md bg-neutral-700/50 px-4 py-2 text-400 hover:text-300"
        >
          contact me
        </Link>
      </button>
    </header>
  );
}
