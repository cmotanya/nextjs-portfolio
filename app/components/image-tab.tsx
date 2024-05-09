import { ReactElement, ReactNode, useState } from "react";
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
  const [isActiveTab, setIsActiveTab] = useState(0);

  const renderTabs = () => {
    return children.map((child, index) => {
      const isActive = index === isActiveTab;
      const tabsClass = isActive ? "bg-gray-800" : "";
      return (
        <li
          key={index}
          className={cn("cursor-pointer rounded-md px-3 py-2", tabsClass)}
          onClick={() => setIsActiveTab(index)}
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
      if (index === isActiveTab) {
        return (
          <div
            key={index}
            className="mx-auto mt-4 flex min-h-[15rem] grid-rows-2 flex-row flex-wrap justify-center gap-3 md:justify-start"
          >
            {child.props.children}
          </div>
        );
      }
    });
  };

  return (
    <div className="mx-auto mt-14">
      <ul className="flex flex-row justify-center gap-3 md:gap-8">
        {renderTabs()}
      </ul>
      {renderContents()}
    </div>
  );
};

export default Tabs;
