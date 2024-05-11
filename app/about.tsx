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
    <section id="about" className="mt-0 font-semibold md:mt-6">
      <h1 className="py-1 font-extrabold uppercase text-600">About.</h1>

      <div className="flex basis-full flex-col justify-center space-y-6 pt-4">
        <div className="space-y-2">
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
          <h3 className="pb-3 text-xl font-semibold uppercase text-800">
            Education
          </h3>
          <table className="mb-4 w-full max-w-full border-collapse rounded-md ring-2 ring-500">
            <thead>
              <tr className="bg-secondary-clr text-800">
                <th className="px-4 py-2 text-left">Degree</th>
                <th className="px-4 py-2 text-left">Institution</th>
                <th className="px-4 py-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" mx-auto divide-x-2 divide-500">
                <td className="flex items-center gap-2 px-4 py-2">
                  <IconSchool /> Bachelor of BIT
                </td>
                <td className="px-4 py-2">JKUAT</td>
                <td className="px-4 py-2">2016</td>
              </tr>
              <tr className="divide-x-2 divide-500 bg-gray-800/50">
                <td className="px-4 py-2">High School Certificate</td>
                <td className="px-4 py-2">Nyamagwa Boys&apos; School</td>
                <td className="px-4 py-2">2009</td>
              </tr>
            </tbody>
          </table>
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
              className="relative flex transform items-center justify-center gap-2 rounded-md bg-800 p-3 text-slate-400 md:max-w-fit"
            >
              <IconBrandLinkedin className="text-[#0a66c2]" />
              LinkedIn
            </Link>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 rounded-md bg-accent-clr p-3 text-800 hover:bg-secondary-clr md:max-w-fit"
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
