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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-4", "opacity-0");
            entry.target.classList.add("translate-y-0");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (cardRef) observer.observe(cardRef);

    return () => {
      if (cardRef) observer.unobserve(cardRef);
    };
  }, []);

  return (
    <div className="relative before:absolute before:top-1/2 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-light-clr after:absolute after:top-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-300 dark:before:bg-700 dark:after:bg-900 xs:before:hidden xs:after:hidden sm:before:block sm:after:block">
      <Link
        ref={card}
        href={link || "#"}
        className="flex h-12 w-[25ch] translate-y-4 transform items-center gap-4 rounded-md bg-secondary-clr ps-3 font-semibold opacity-0 shadow-xl transition duration-700 ease-in-out dark:bg-800 dark:text-400 xs:mb-0 xs:ml-0 xs:ring-700 dark:xs:ring-2 sm:mb-2 sm:ml-10 sm:ring-0 md:mb-0 md:space-y-6"
      >
        <span className="text-bright-clr dark:text-500">{icon}</span> {text}
      </Link>
    </div>
  );
};

export default ContactCards;
