"use client";

import React from "react";
import ImageTab from "./components/image-tab";
import Testimonials from "./components/testimonials";
import SkillsProficiency from "./components/skills-proficiency";

function Experience() {
  return (
    <section id="about" className="font-semibold">
      <div>
        <h1 className="py-2 font-extrabold uppercase text-600">Experience</h1>
        <p className="md:pb-6">
          Businesses with websites enjoy up to 72% higher online discovery, 88%
          more reviews, 78% more email inquiries, and 96% higher social media
          engagement compared to those without. Invest in a professional website
          today to unlock exponential growth opportunities
        </p>
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
