import React from "react";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="mt-0 font-semibold md:mt-6">
      <h1 className="py-2 font-extrabold">About.</h1>

      <div className="flex basis-full flex-col justify-center space-y-6 pt-4">
        <div>
          <h3 className="pb-1 text-xl font-semibold">Background</h3>
          <p>
            I&apos;m a passionate software engineer with a strong background in
            developing robust and scalable web applications. Born and raised in
            a small town, I developed an early interest in technology and
            problem-solving. My curiosity and determination led me to pursue a
            career in this field.
          </p>
        </div>
        <div>
          <h3 className="pb-1 text-xl font-semibold text-secondary-clr">
            Education
          </h3>
          <table className="mb-4 w-full border-collapse rounded-md ring-2 ring-800">
            <thead>
              <tr className="bg-800">
                <th className="px-4 py-2 text-left">Degree</th>
                <th className="px-4 py-2 text-left">Institution</th>
                <th className="px-4 py-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" mx-auto divide-x-2 divide-800">
                <td className="px-4 py-2">Bachelor of BIT</td>
                <td className="px-4 py-2">JKUAT</td>
                <td className="px-4 py-2">2016</td>
              </tr>
              <tr className="divide-x-2 divide-800 bg-gray-800/50">
                <td className="px-4 py-2">High School Certificate</td>
                <td className="px-4 py-2">Nyamagwa Boys&apos; School</td>
                <td className="px-4 py-2">2009</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default About;
