"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { IconBrandLinkedin, IconFile, IconSchool } from "@tabler/icons-react";

function About() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    const fileID = "18r8SaE40PmARQSv5kV42NAQaLsg-3R8B";
    link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section id="about" className="mt-6 font-semibold md:mt-10">
      <h1 className="py-1 font-extrabold uppercase text-600">About.</h1>

      <div className="flex basis-full flex-col justify-center space-y-6 pt-2">
        <div>
          <h3 className="text-xl font-semibold uppercase text-600">
            Background
          </h3>

          <p>
            Having a background in IT and the love to learn new technologies,
            catapulted my interest when I realized I could accomplish more by
            writing code. My determination led me to pursue data analysis and
            visualization and later web development as a career.
          </p>
          <p>
            I&apos;m currently a freelancer specializing in CCTV and biometric
            authentication system installations, and handle simple LAN
            configuration complements besides wed development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold uppercase text-600">
            Education
          </h3>

          {/* University college */}
          <div className="relative">
            <span className="before:absolute before:text-3xl before:text-600 before:content-['•']"></span>
            <div className="ml-6">
              <p>Bachelor of BIT</p>
              <span className="-mt-2 rounded-md bg-800 p-1 text-500">
                JKUAT, 2016
              </span>
            </div>

            {/* Secondary school */}
            <span className="before:absolute before:left-[0.22rem] before:top-7 before:h-[4.2rem] before:w-[0.12rem] before:bg-800"></span>
            <span className="before:absolute before:top-[5.4rem] before:text-3xl before:text-600 before:content-['•']"></span>
            <div className="ml-6 mt-6">
              <p>High School Certificate</p>
              <span className="-mt-2 rounded-md bg-800 p-1 text-500">
                Nyamagwa Boys&apos; School, 2009
              </span>
            </div>

            {/* Primary school */}
            <span className="before:absolute before:left-[0.22rem] before:top-[7.2rem] before:h-[4.2rem] before:w-[0.12rem] before:bg-800"></span>
            <span className="before:absolute before:top-[10.8rem] before:text-3xl before:text-600 before:content-['•']"></span>
            <div className="ml-6 mt-6">
              <p>Primary School Certificate</p>
              <span className="-mt-2 rounded-md bg-800 p-1 text-500">
                Kosawo Primary School, 1997
              </span>
            </div>
          </div>
        </div>

        <div>
          <p>
            For more details, you can check out my{" "}
            <span className="text-600">LinkedIn</span> or{" "}
            <span className="text-600">download my CV</span>.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-3 md:flex-row md:gap-12">
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-1 transform items-center justify-center gap-2 rounded-full bg-800 px-4 py-3 text-400 transition-all active:scale-105"
            >
              <IconBrandLinkedin className="text-[#0a66c2]" />
              LinkedIn
            </Link>
            <button
              onClick={handleDownload}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 ring-2 ring-700 transition-all hover:ring-800 active:scale-105"
            >
              <IconFile />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
