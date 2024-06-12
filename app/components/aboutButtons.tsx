import { IconBrandLinkedin, IconFile } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { promise } from "zod";

const AboutButtons = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const buttonRef = useRef(null);

  const handleDownload = useCallback(() => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);

      const link = document.createElement("a");
      const fileID = "18r8SaE40PmARQSv5kV42NAQaLsg-3R8B";
      link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // toast.promise(promise, {
      //   loading: "Downloading",
      //   success: (data: { name: string }) => {
      //     return data.name + " downloaded!";
      //   },
      //   error: () => "Something went wrong!",
      // });
      toast.success("Downloaded!");
    }, 3000);
  }, []);

  useEffect(() => {
    const buttonRefElem = buttonRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("translate-y-0");
        }
      });
    });

    if (buttonRefElem) observer.observe(buttonRefElem);

    return () => {
      if (buttonRefElem) observer.unobserve(buttonRefElem);
    };
  }, []);

  return (
    <div>
      <p>
        For more details, you can check out my{" "}
        <span className="text-light-clr dark:text-600">LinkedIn</span> or{" "}
        <span className="text-light-clr dark:text-600">download my CV</span>.
      </p>
      <div
        ref={buttonRef}
        className="flex translate-y-8 transform flex-col justify-center gap-4 pt-3 opacity-0 transition duration-700 ease-in-out md:flex-row md:gap-12"
      >
        <Link
          href="./broken_link"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-1 items-center justify-center gap-2 rounded-full bg-secondary-clr px-4 py-3 active:scale-105 dark:bg-800 dark:text-400"
        >
          <IconBrandLinkedin className="text-[#0a66c2]" />
          LinkedIn
        </Link>
        <button
          onClick={handleDownload}
          className="flex flex-1 transform items-center justify-center gap-2 rounded-full bg-primary-clr px-4 py-3 text-300 shadow transition-all hover:ring-800 active:scale-105 dark:bg-transparent dark:ring-2 dark:ring-700"
        >
          <IconFile />
          {isDownloading ? "Downloading..." : "Download CV"}
        </button>
      </div>
    </div>
  );
};

export default AboutButtons;
