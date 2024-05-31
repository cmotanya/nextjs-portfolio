"use client";

import React from "react";
import Testimonials from "./components/testimonials";
import SkillsProficiency from "./components/skills-proficiency";
import ServiceCard from "./components/service-card";
import ImageTab from "./components/image-content";
import JobHistory from "./components/job-history";

function Experience() {
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
      </div>

      <JobHistory />

      <ImageTab />

      <Testimonials />

      <SkillsProficiency />

      <ServiceCard />
    </section>
  );
}

export default Experience;
