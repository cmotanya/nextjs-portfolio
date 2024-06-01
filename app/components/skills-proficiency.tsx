import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../utils/cn";

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
  return (
    <div className="space-y-1">
      <p className="">{skillName}</p>
      <button
        onClick={() => {
          toggleDrawer(skillName);
        }}
        className={cn(
          "rounded-full bg-secondary-clr px-3 py-1 outline-none outline-offset-2 outline-secondary-clr transition-all hover:bg-accent-clr hover:outline-accent-clr dark:bg-neutral-800/50 dark:outline-800 dark:hover:font-semibold dark:hover:text-500 dark:hover:outline-700",
          isOpen ? "font-semibold dark:text-500 dark:outline-700" : "",
        )}
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {isOpen && (
        <div className="group">
          <motion.div
            transition={{ duration: 0.4 }}
            className="pt-2 group-hover:text-600 dark:text-600 dark:group-hover:text-neutral-600"
          >
            <motion.div
              initial="translate-y-4"
              animate="translate-y-0"
              exit="hidden"
              className="flex flex-wrap gap-3"
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
      transition={{ duration: 0.4 }}
      className="flex hover:text-900 dark:hover:text-neutral-400"
    >
      <span className="rounded-full bg-400 px-2 py-1 dark:bg-800">{text}</span>
    </motion.div>
  );
}

export default ProfessionalSkills;
