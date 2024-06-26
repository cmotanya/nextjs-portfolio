import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const delay = `delay-${Math.floor(Math.random() * 10)}ms`;

function ProfessionalSkills() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<string | null>(null);

  function toggleDrawer(skillName: string) {
    setIsDrawerOpen((prevDrawer) =>
      prevDrawer === skillName ? null : skillName,
    );
  }

  return (
    <div className="pt-10">
      <h2 className="text-xl font-semibold uppercase text-light-clr dark:text-600">
        Skill-set proficiency:
      </h2>
      <div className="space-y-4">
        <SkillDrawer
          isOpen={isDrawerOpen === "Programming:"}
          toggleDrawer={toggleDrawer}
          skillName="Programming:"
        >
          <SkillItem text="HTML5" />
          <SkillItem text="CSS3" />
          <SkillItem text="JavaScript" />
          <SkillItem text="AstroJS" />
          <SkillItem text="ReactJS" />
          <SkillItem text="NextJS" />
          <SkillItem text="Python" />
          <SkillItem text="Pandas" />
        </SkillDrawer>

        <SkillDrawer
          skillName="CCTV, Biometric and Access Controls:"
          isOpen={isDrawerOpen === "CCTV, Biometric and Access Controls:"}
          toggleDrawer={toggleDrawer}
        >
          <SkillItem text="Site Survey" />
          <SkillItem text="Installation" />
          <SkillItem text="Maintenance" />
          <SkillItem text="Remote View" />
        </SkillDrawer>

        <SkillDrawer
          skillName="Networking:"
          isOpen={isDrawerOpen === "Networking:"}
          toggleDrawer={toggleDrawer}
        >
          <SkillItem text="Basic Set-up" />
          <SkillItem text="Troubleshooting" />
          <SkillItem text="IP Addressing" />
          <SkillItem text="Wireless Config" />
          <SkillItem text="Cabling" />
        </SkillDrawer>
      </div>
    </div>
  );
}

function SkillDrawer({
  skillName,
  children,
  isOpen,
  toggleDrawer,
}: {
  skillName: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggleDrawer: (skillName: string) => void;
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const buttonRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (buttonRef) observer.observe(buttonRef);

    return () => {
      if (buttonRef) observer.unobserve(buttonRef);
    };
  }, []);

  return (
    <div className="space-y-1">
      <p className="">{skillName}</p>
      <button
        ref={ref}
        onClick={() => {
          toggleDrawer(skillName);
        }}
        className={cn(
          "transform rounded-full bg-secondary-clr px-3 py-1 outline-none outline-offset-2 outline-secondary-clr transition-all duration-500 ease-in-out hover:bg-accent-clr hover:outline-accent-clr dark:bg-slate-800/50 dark:outline-800 dark:hover:font-semibold dark:hover:text-500 dark:hover:outline-700",
          isOpen ? "font-semibold dark:text-500 dark:outline-700" : "",
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
        )}
      >
        <span className="flex items-center gap-2">
          {isOpen ? "Hide Detail" : "Show Detail"}
          <span>{isOpen ? <IconChevronUp /> : <IconChevronDown />}</span>
        </span>
      </button>

      {isOpen && (
        <div className="group">
          <motion.div
            transition={{ duration: 0.4 }}
            className="group-hover:text-600 dark:group-hover:text-600"
          >
            <motion.div
              initial={{ translateY: 16 }}
              animate="translate-y-0"
              exit="hidden"
              className="-mt-2 flex flex-wrap gap-3 pb-3"
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function SkillItem({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -24 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -24 }}
      transition={{ duration: 0.2 }}
      className="flex hover:text-900 dark:hover:text-400"
    >
      <span className="rounded-full bg-400 px-2 py-1 dark:bg-800">{text}</span>
    </motion.div>
  );
}

export default ProfessionalSkills;
