import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

interface ContactCardsProps {
  icon: ReactNode;
  text: string;
  link?: string;
  handleClick?: (url: string) => void;
}
const ContactCards = ({ icon, text, link }: ContactCardsProps) => {
  const card = useRef(null);

  useEffect(() => {
    const cardRef = card.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("translate-y-4", "opacity-0");
          entry.target.classList.add("translate-y-0");
        }
      });
    });

    if (cardRef) observer.observe(cardRef);

    return () => {
      if (cardRef) observer.unobserve(cardRef);
    };
  }, []);

  return (
    <div
      ref={card}
      className="relative flex h-12 w-[25ch] translate-y-4 transform items-center gap-4 rounded-md bg-accent-clr ps-3 font-semibold opacity-0 transition duration-700 ease-in-out before:absolute before:-left-8 before:top-1/2 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-light-clr after:absolute after:-left-8 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-800 dark:bg-800 dark:text-400 dark:before:bg-700 xs:mb-0 xs:ml-0 xs:ring-700 xs:before:hidden xs:after:hidden dark:xs:ring-2 sm:mb-2 sm:ml-10 sm:ring-0 sm:before:block md:mb-0"
    >
      <Link
        href={link || "#"}
        target="_blank"
        className="flex h-full w-full items-center gap-4 md:space-y-6"
      >
        {icon} {text}
      </Link>
    </div>
  );
};

export default ContactCards;
