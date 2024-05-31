import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import React from "react";

type TabProps = {
  title: string;
  children: ReactNode;
};

type TabsProps = {
  children: ReactElement<TabProps>[];
};

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const imageRef = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("scale-0", "opacity-0");
          entry.target.classList.add("scale-100");
        }
      });
    });

    imageRef.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRef.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };
  }, [activeTab]);

  const renderTabs = () => {
    return children.map((child, index) => {
      const isActive = index === activeTab;
      const tabsClass = isActive ? "bg-secondary-clr dark:bg-800" : "";
      return (
        <li
          key={index}
          className={cn("cursor-pointer rounded-full px-4 py-2", tabsClass)}
          onClick={() => setActiveTab(index)}
          role="tabs"
          aria-selected={isActive}
        >
          {child.props.title}
        </li>
      );
    });
  };

  const renderContents = () => {
    return children.map((child, index) => {
      if (index === activeTab) {
        return (
          <div
            ref={(el) => {
              ref.current[index] = el;
            }}
            key={index}
            className="mx-auto mt-4 flex scale-0 transform flex-row flex-wrap justify-center gap-3 opacity-0 transition duration-700 ease-in-out xs:gap-2 md:justify-start"
          >
            {child.props.children}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="mx-auto mt-14">
      <ul className="flex flex-row justify-center gap-3 xs:gap-0 md:gap-8">
        {renderTabs()}
      </ul>
      {renderContents()}
    </div>
  );
};

export default Tabs;
