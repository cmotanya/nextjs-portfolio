"use client";

import React, { ReactNode } from "react";
import { IconMail, IconMap, IconPhoneCall } from "@tabler/icons-react";
import ContactForm from "./components/contact-form";

function ContactComponent({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="relative mb-2 ml-10 flex h-12 w-[25ch] items-center gap-4 rounded-md bg-neutral-800 ps-3 font-semibold text-400 ring-0 ring-700 before:absolute before:-left-8 before:top-1/2 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-rose-800 after:absolute after:-left-8 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-transparent md:mb-0">
      {icon} {text}
    </div>
  );
}

function Contact() {
  const accessKey = "2e3adbbc-1bf9-439a-b88a-d85e13ac63fe";

  return (
    <section id="contact" className=" pb-24 font-semibold md:mt-8">
      <h1 className="py-3 text-4xl font-extrabold uppercase text-600 md:pt-0">
        Contact{" "}
      </h1>
      <div>
        <h2 className="py-3">
          Have a question or need assistance? Contact me today!
        </h2>

        <div className="mb-10 mt-5 grid grid-flow-row grid-cols-1 md:grid-flow-col md:grid-cols-[50%_50%]">
          <div className="mx-auto mb-6 flex flex-col space-y-4 text-neutral-800 md:mb-0  md:ml-0 md:space-y-6">
            <ContactComponent icon={<IconMap />} text="Mombasa, Kenya" />
            <ContactComponent
              icon={<IconPhoneCall />}
              text="(+254) 712-909-475"
            />
            <ContactComponent icon={<IconMail />} text="motanyac@gmail.com" />
          </div>

          <ContactForm accessKey={accessKey} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
