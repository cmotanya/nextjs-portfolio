import React from "react";
import Education from "./components/education";
import AboutButtons from "./components/aboutButtons";
import { Toaster } from "sonner";

function About() {
  return (
    <section id="about" className="mt-6 font-semibold md:mt-10">
      <h1 className="py-1 font-extrabold uppercase text-bright-clr dark:text-600">
        About.
      </h1>

      <div className="flex basis-full flex-col justify-center space-y-6 pt-2">
        <div>
          <h3 className="text-xl font-semibold uppercase text-light-clr dark:text-600">
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

        <Education />

        <AboutButtons />
      </div>
      <Toaster position="bottom-center" duration={3000} richColors />
    </section>
  );
}

export default About;
