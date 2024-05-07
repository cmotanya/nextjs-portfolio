"use client";

import React from "react";
import ImageTab from "./components/image-tab";
import Testimonials from "./components/testimonials";
import SkillsProficiency from "./components/skills-proficiency";
import {
  IconBriefcase,
  IconBuilding,
  IconBuildingStore,
  IconMan,
  IconTimeline,
} from "@tabler/icons-react";

function Experience() {
  return (
    <section id="about" className="font-semibold">
      <div>
        <h1 className="py-2 font-extrabold uppercase text-600">Experience</h1>
        <p className="md:pb-6">
          Through the period of my career both as employed and freelancing, lies
          a testament of immense skills gathered that have enabled me perform
          and provide solutions to unique problems that I encounter.
        </p>

        <div className="mt-3 space-y-3">
          <div className="grid justify-between rounded-md bg-800 p-2 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBuilding /> High School Teacher
              </p>
              <span className="ml-8 inline-block rounded-md bg-gray-900/50 px-2">
                2017
              </span>
            </div>
            <p className="text-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, iusto?
            </p>
          </div>

          <div className="grid justify-between rounded-md bg-800 p-2 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBuildingStore /> Ken Computers
              </p>
              <span className="ml-8 inline-block rounded-md bg-gray-900/50 px-2">
                2019
              </span>
            </div>
            <p className="text-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, amet?
            </p>
          </div>

          <div className="grid justify-between rounded-md bg-800 p-2 md:w-[80%] md:grid-flow-col md:grid-cols-[50%_50%]">
            <div className="mb-2 flex items-center justify-between md:mb-0 md:block">
              <p className="flex items-center gap-2">
                <IconBriefcase /> Freelancing Gig
              </p>
              <span className="ml-8 inline-block rounded-md bg-gray-900/50 px-2">
                2020
              </span>
            </div>
            <p className="text-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              perferendis.
            </p>
          </div>
        </div>
      </div>

      {/* image set describing my kind of work. */}
      <ImageTab />

      {/* Carousel featuring feedback from clients. */}
      <Testimonials />

      {/* Skill set array. */}
      <div>
        <h2 className="py-4 text-xl font-bold uppercase">
          Below are my skills:
        </h2>
        <SkillsProficiency />
      </div>
    </section>
  );
}

export default Experience;
