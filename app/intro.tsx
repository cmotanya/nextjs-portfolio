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
          <p className="animate-pulse space-y-6 md:space-y-10 md:text-xl">
            👋 Hi there, I&apos;m Cornelius
          </p>
          <h2 className="text-4xl font-bold"></h2>
          <p className="font-caveat h-[3.6rem] text-2xl uppercase text-fuchsia-600 md:h-auto">
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
          className="flex-1 rounded-full bg-800 px-6 py-3 text-center transition hover:bg-neutral-700/50 active:scale-105"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="flex-1 rounded-full px-6 py-3 text-center ring-2 ring-600 transition hover:ring-800 active:scale-105"
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
        "front-end development.",
        1500,
        "CCTV installation.",
        1500,
        "computers & network.",
        1500,
        "data analysis.",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-600"
      repeat={Infinity}
    />
  );
};

export default Intro;
