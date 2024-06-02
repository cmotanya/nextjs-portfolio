import {
  IconBuilding,
  IconBuildingStore,
  IconBriefcase,
} from "@tabler/icons-react";
import { useEffect, useRef } from "react";

const JobHistory = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cardRefs = refs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "scale-75");
            entry.target.classList.add("scale-100");
          }
        });
      },
      { threshold: 0.3 },
    );

    cardRefs.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => {
      cardRefs.forEach((cardRef) => {
        if (cardRef) observer.unobserve(cardRef);
      });
    };
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={(el) => {
          refs.current[0] = el;
        }}
        className="grid scale-75 transform justify-between rounded-md bg-400 p-2 opacity-0 shadow-xl transition-all duration-700 ease-in-out dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]"
      >
        <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
          <p className="flex items-center gap-2">
            <IconBuilding />{" "}
            <span className="text-bright-clr dark:text-500">
              High School Teacher
            </span>
          </p>
          <span className="ml-8 inline-block rounded-md bg-primary-clr px-3 text-300 dark:bg-neutral-900/50 dark:text-600">
            2017
          </span>
        </div>
        <p className="leading-tight dark:text-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          iusto?
        </p>
      </div>

      <div
        ref={(el) => {
          refs.current[1] = el;
        }}
        className="grid scale-75 transform justify-between rounded-md bg-400 p-2 opacity-0 shadow-xl transition-all duration-700 ease-in-out dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]"
      >
        <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
          <p className="flex items-center gap-2">
            <IconBuildingStore />{" "}
            <span className="text-bright-clr dark:text-500">Ken Computers</span>
          </p>
          <span className="ml-8 inline-block rounded-md bg-primary-clr px-2 text-200 dark:bg-neutral-900/50 dark:text-600">
            2019
          </span>
        </div>
        <p className="leading-tight dark:text-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          amet?
        </p>
      </div>

      <div
        ref={(el) => {
          refs.current[2] = el;
        }}
        className="grid scale-75 transform justify-between rounded-md bg-400 p-2 opacity-0 shadow-xl transition-all duration-700 ease-in-out dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]"
      >
        <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
          <p className="flex items-center gap-2">
            <IconBriefcase />{" "}
            <span className="text-bright-clr dark:text-500">
              Freelancing Gig
            </span>
          </p>
          <span className="ml-8 inline-block rounded-md bg-primary-clr px-2 text-200 dark:bg-neutral-900/50 dark:text-600">
            2020
          </span>
        </div>
        <p className="leading-tight dark:text-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          perferendis.
        </p>
      </div>
    </div>
  );
};

export default JobHistory;
