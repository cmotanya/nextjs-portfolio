"use client";

import React from "react";
import Image from "next/image";
import { introImage } from "./lib/global_links";
import TextAnimation from "./components/text-animation";

const Intro = () => {
  return (
    <section className="flex h-screen flex-col justify-between pb-4 pt-10 font-semibold sm:pt-[10rem] md:justify-center md:pt-0">
      <div className="space-y-4 pt-14 xs:space-y-8 sm:pt-0 md:pt-0">
        <h1 className="text-center text-2xl sm:text-4xl">
          BUILD YOUR NEXT PRO-LEVEL WEBSITE WITH US!
        </h1>

        <p className="font-playwrite text-lg dark:text-500 sm:text-xl">
          As an IT graduate with a passion for technology, I help businesses
          build an online presence, secure their premises by implementing robust
          security measures, optimizing lan configurations, and extracting
          valuable insights from data.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5 md:flex-row">
        <a
          href="#contact"
          className="flex-1 rounded-full bg-primary-clr px-6 py-3 text-center text-200 shadow-lg transition active:scale-105 dark:bg-800 dark:hover:bg-slate-700/50"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="flex-1 rounded-full bg-secondary-clr px-6 py-3 text-center shadow-lg ring-600 transition hover:ring-800 active:scale-105 dark:bg-transparent dark:ring-2"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Intro;
