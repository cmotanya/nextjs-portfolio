"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section className="pt-[6rem] font-semibold md:pt-[8rem]">
      <h1 className="py-4">Unlock your Digital Potential.</h1>

      <p className="mb-4 text-lg text-400 text-indigo-500">
        <TextAnimation />
      </p>
      <p className="mb-8 text-lg">
        With a passion for technology and a keen eye for detail, I bring a
        unique perspective to every project. My diverse expertise allows me to
        tackle complex challenges from multiple angles, ensuring comprehensive
        and innovative solutions.
      </p>
      <p className="mb-8 text-lg">
        Whether it&apos;s crafting intuitive user experiences, implementing
        robust security measures, optimizing network performance, or extracting
        valuable insights from data, I approach each task with dedication and a
        commitment to excellence.
      </p>
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
        "As an IT graduate with a multifaceted skill-set, I excel in web development.",
        1500,
        "As an IT graduate with a multifaceted skill-set, I excel in CCTV installation.",
        1500,
        "As an IT graduate with a multifaceted skill-set, I excel in network configuration.",
        1500,
        "As an IT graduate with a multifaceted skill-set, I excel and in data analysis.",
        1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Intro;
