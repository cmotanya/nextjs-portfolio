"use client";

import React from "react";
import Testimonials from "./components/testimonials";
import SkillsProficiency from "./components/skills-proficiency";
import Image from "next/image";
import {
  IconBriefcase,
  IconBuilding,
  IconBuildingStore,
} from "@tabler/icons-react";
import Tabs from "./components/image-tab";
import { tabImg } from "./lib/global_links";

function Experience() {
  const img = tabImg.map((img) => img.images);
  const alt = tabImg.map((img) => img.name);

  return (
    <section id="experience" className="mt-6 font-semibold md:mt-10">
      <div>
        <h1 className="py-2 font-extrabold uppercase text-bright-clr dark:text-600">
          Experience
        </h1>
        <p className="md:pb-3">
          Through the period of my career both as employed and freelancing, lies
          a testament of immense skills gathered that have enabled me perform
          and provide solutions to unique problems that I encounter.
        </p>

        <div className="space-y-3">
          <div className="grid justify-between rounded-md bg-400 p-2 dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBuilding />{" "}
                <span className="text-bright-clr">High School Teacher</span>
              </p>
              <span className="ml-8 inline-block rounded-md bg-primary-clr px-3 text-300 dark:bg-neutral-900/50">
                2017
              </span>
            </div>
            <p className="dark:text-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, iusto?
            </p>
          </div>

          <div className="grid justify-between rounded-md bg-400 p-2 dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBuildingStore />{" "}
                <span className="text-bright-clr">Ken Computers</span>
              </p>
              <span className="ml-8 inline-block rounded-md bg-secondary-clr px-2 dark:bg-neutral-900/50">
                2019
              </span>
            </div>
            <p className="dark:text-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, amet?
            </p>
          </div>

          <div className="grid justify-between rounded-md bg-neutral-400/50 p-2 dark:bg-800 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBriefcase />{" "}
                <span className="text-bright-clr">Freelancing Gig</span>
              </p>
              <span className="ml-8 inline-block rounded-md bg-primary-clr px-2 text-200 dark:bg-neutral-900/50">
                2020
              </span>
            </div>
            <p className="dark:text-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              perferendis.
            </p>
          </div>
        </div>
      </div>

      {/* image set describing my kind of work. */}
      <Tabs>
        <div title={alt[0]} className="">
          {img[0].map(
            (imgSrc, index) =>
              imgSrc != undefined && (
                <Image
                  key={index}
                  src={imgSrc}
                  alt={alt[0]}
                  priority
                  width="200"
                  height="200"
                  className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
                />
              ),
          )}
        </div>
        <div
          title={alt[1]}
          className="grid w-full grid-cols-2 gap-5 md:grid-cols-3"
        >
          {img[1].map(
            (imgSrc, index) =>
              imgSrc != undefined && (
                <Image
                  key={index}
                  src={imgSrc}
                  alt={alt[1]}
                  priority
                  width="300"
                  height="300"
                  className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
                />
              ),
          )}
        </div>
        <div
          title={alt[2]}
          className="grid w-full grid-cols-2 gap-5 md:grid-cols-3"
        >
          {img[2].map(
            (imgSrc, index) =>
              imgSrc != undefined && (
                <Image
                  key={index}
                  src={imgSrc}
                  alt={alt[2]}
                  // fill
                  priority
                  width="300"
                  height="300"
                  className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
                />
              ),
          )}
        </div>
      </Tabs>

      {/* Carousel featuring feedback from clients. */}
      <Testimonials />

      {/* Skill set array. */}
      <div className="pt-10">
        <h2 className="text-xl font-bold uppercase text-600">
          Skill-set proficiency:
        </h2>
        <SkillsProficiency />
      </div>
    </section>
  );
}

export default Experience;
