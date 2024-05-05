import React from "react";
import {
  IconDeviceCctv,
  IconDeviceLaptop,
  IconTools,
} from "@tabler/icons-react";

let heading = "a web developer.";

function About() {
  return (
    <section id="about" className="pb-8 sm:pb-0 md:pt-[calc(5rem-3rem)]">
      <div className="font-quicksand mx-auto w-[--width] pt-[3.5rem] md:mt-8">
        <p className="mt-12 text-pretty text-start text-gray-300">
          hi, I am <span className="uppercase">cornelius! 😉</span>
        </p>
        {/* <TextGenerateEffect words={heading} /> */}

        {/* Blocks describing my services */}
        <div className="grid grid-flow-row grid-cols-[3_10rem] gap-4 text-balance pt-10 md:mt-8 md:grid-flow-col md:gap-10">
          <ServiceBlock
            icon={<IconDeviceLaptop size={35} />}
            title="web development."
            description="Skilled in creating user-friendly website from concept to production."
          />
          <ServiceBlock
            icon={<IconDeviceCctv size={35} />}
            title="cctv installation."
            description="Expertise in installing and maintaining robust cctv systems."
          />
          <ServiceBlock
            icon={<IconTools size={35} />}
            title="networking."
            description="Skilled in network setup, protocols and infrastructure."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-balance rounded-md border-2 border-slate-800 bg-gray-900/80 p-2 text-center text-gray-500 shadow-md">
      <span className="md:my-2">{icon}</span>
      <h3 className=" font-bold uppercase">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default About;
