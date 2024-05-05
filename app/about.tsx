import React from "react";
import Link from "next/link";

function About() {
  return (
    <section id="about" className="mt-0 font-semibold md:mt-6">
      <h1 className="py-2 font-extrabold">About.</h1>
      <div className="flex basis-full flex-col justify-center space-y-6">
        <p>
          Hailing from the coastal city of Mombasa, I am currently a thriving
          freelancer. My exemplary service both as developer and freelance
          technician provides a unique match to the needs of my clients. I excel
          in troubleshooting and maintaining computer systems, security cameras
          and networking.
        </p>
        <p>
          My goal is not just to meet your expectation, but to exceed while
          driving through with unparalleled success. Whether it is a website for
          your business, or installation, you can count on me to deliver the
          result to you.
        </p>
        <p>
          Would you like to learn more about my experience? You can download my
          resume{" "}
          <Link href="#" className="text-indigo-400">
            here!
          </Link>
        </p>
      </div>
    </section>
  );
}

export default About;
