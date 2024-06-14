import {
  Icon360View,
  IconActivity,
  IconCheckbox,
  IconChecklist,
  IconCheckupList,
  IconDeviceLaptop,
  IconTools,
} from "@tabler/icons-react";
import { RefObject, useEffect, useRef } from "react";

const ServiceCard = () => {
  const webCardRef = useRef(null);
  const netCardRef = useRef(null);

  useEffect(() => {
    const webRefCurrent = webCardRef.current;
    const netRefCurrent = netCardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "scale-75",
              "opacity-0",
              "invisible",
              "rotate-6",
            );
            entry.target.classList.add("scale-100", "rotate-0");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (webRefCurrent) observer.observe(webRefCurrent);
    if (netRefCurrent) observer.observe(netRefCurrent);

    return () => {
      if (webRefCurrent) observer.unobserve(webRefCurrent);
      if (netRefCurrent) observer.unobserve(netRefCurrent);
    };
  }, []);

  useEffect(() => {
    const netRefCurrent = netCardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "scale-75",
              "opacity-0",
              "invisible",
              "-rotate-6",
            );
            entry.target.classList.add("scale-100", "rotate-0");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (netRefCurrent) observer.observe(netRefCurrent);

    return () => {
      if (netRefCurrent) observer.unobserve(netRefCurrent);
    };
  }, []);

  return (
    <div className="pt-10">
      <h3 className="text-xl font-semibold uppercase text-light-clr dark:text-600">
        need a quotation for my service:
      </h3>
      <div className="mt-2 grid grid-flow-row grid-cols-2 gap-4 md:grid-flow-col">
        <div
          ref={webCardRef}
          className="invisible flex rotate-6 scale-75 transform flex-col justify-between rounded-md border-2 border-400 bg-transparent p-3 opacity-0 shadow-xl transition duration-700 ease-in-out dark:border-800 dark:bg-slate-800/40"
        >
          <p className="flex items-center justify-center gap-3 bg-transparent pb-3 text-xl uppercase text-bright-clr backdrop-blur-lg dark:text-400">
            <IconDeviceLaptop /> web
          </p>
          <div className="space-y-2 text-800 *:leading-tight dark:text-400">
            <p className="flex">
              <IconCheckbox size={45} className="-mt-[0.8rem] mr-2" />
              <span className="text-700 dark:text-500">
                Sing-page website: Perfect for small businesses or personal
                projects.
              </span>
            </p>

            <p className="flex">
              <IconCheckbox size={45} className="-mt-[0.8rem] mr-2" />
              <span className="text-700 dark:text-500">
                Portfolio website:Showcase your work in a stunning online
                portfolio.
              </span>
            </p>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="w-full transform rounded-full bg-primary-clr px-4 py-2 uppercase text-300 transition active:-translate-y-2 dark:bg-900 dark:text-400 dark:hover:text-600 md:w-fit">
              Get Started Today
            </button>
          </div>
        </div>

        <div
          ref={netCardRef}
          className="invisible flex rotate-6 scale-75 transform flex-col justify-between rounded-md border-2 border-400 bg-transparent p-3 opacity-0 shadow-xl transition duration-700 ease-in-out dark:border-800 dark:bg-slate-800/40"
        >
          <p className="flex items-center justify-center gap-3 bg-transparent pb-3 text-xl uppercase text-bright-clr backdrop-blur-lg dark:text-400">
            <IconActivity /> cctv and networking
          </p>

          <div className="space-y-2 *:leading-tight dark:text-400">
            <p className="flex">
              <IconCheckbox size={52} className="-mt-[0.8rem] mr-2" />
              <span className="text-700 dark:text-500">
                Professional CCTV installation for security and surveillance:
                Prices start from KShs.8,000
              </span>
            </p>

            <p className="flex">
              <IconCheckbox size={52} className="-mt-[0.8rem] mr-2" />{" "}
              <span className="text-700 dark:text-500">
                Custom network design and installation: Prices may vary based on
                project scope.
              </span>
            </p>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="w-full transform rounded-full bg-primary-clr px-4 py-2 font-semibold uppercase text-300 transition active:-translate-y-2 dark:bg-900 dark:text-400 dark:hover:text-600 md:w-fit">
              connect now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
