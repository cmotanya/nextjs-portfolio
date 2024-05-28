"use client";

import React from "react";
import Image from "next/image";
import { introImage } from "./lib/global_links";
import TextAnimation from "./components/text-animation";

const Intro = () => {
  return (
    <section className="pt-[6rem] font-semibold md:pt-[8rem]">
      <div className="grid gap-4 md:grid-flow-col md:grid-cols-[65%_35%]">
        <div className="space-y-6 md:space-y-10">
          <p className="animate-pulse space-y-6 md:space-y-10 md:text-xl">
            👋 Hi there, I&apos;m Cornelius
          </p>
          <h2 className="text-4xl font-bold"></h2>
          <p className="h-[3.6rem] font-caveat text-2xl uppercase text-fuchsia-600 md:h-auto">
            Expert in <TextAnimation />
          </p>
          <p className="mb-8">
            As an IT graduate with a passion for technology, I help businesses
            build an online presence, secure their premises by implementing
            robust security measures, optimizing lan configurations, and
            extracting valuable insights from data.
          </p>
        </div>
        <Image
          src={introImage}
          alt="into image"
          width="300"
          height="200"
          className="m-auto hidden h-[15rem] w-[15rem] rotate-3 rounded-md object-cover md:block"
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-5 md:flex-row">
        <a
          href="#contact"
          className="flex-1 rounded-full bg-primary-clr px-6 py-3 text-center text-200 transition active:scale-105 dark:bg-800 dark:hover:bg-neutral-700/50"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="flex-1 rounded-full bg-secondary-clr px-6 py-3 text-center ring-600 transition hover:ring-800 active:scale-105 dark:ring-2"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Intro;
