"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { introImage } from "./lib/global_links";

const Intro = () => {
  return (
    <section className="pt-[6rem] font-semibold md:pt-[8rem]">
      <div className="grid gap-4 md:grid-flow-col md:grid-cols-[65%_35%]">
        <div className="space-y-6 md:space-y-10">
          <p className="animate-pulse md:pt-4 md:text-xl">
            👋 Hi there, I&apos;m Cornelius
          </p>
          <h2 className="text-4xl font-bold"></h2>
          <p className="h-[3.6rem] text-2xl uppercase text-yellow-600 md:h-auto">
            <TextAnimation />
          </p>
          <p className="mb-8">
            As an IT graduate with a passion for technology, I help businesses
            build an online presence, secure their premises by implementing
            robust security measures, optimizing network performance, and
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

      <div className="mx-auto mt-10 max-w-3xl sm:flex sm:justify-center lg:justify-start">
        <a
          href="#contact"
          className="text-bold mb-4 mr-3 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-clr px-8 py-3 text-base font-semibold uppercase text-300 hover:bg-blue-800 sm:mb-0 md:px-10 md:py-4 md:text-lg"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-800/50 px-8 py-3 text-base font-semibold uppercase text-400 hover:bg-slate-800 md:px-10 md:py-4 md:text-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "I excel in web development.",
        1500,
        "I excel in CCTV installation.",
        1500,
        "I excel in computers & network.",
        1500,
        "I excel in data analysis.",
        1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Intro;
