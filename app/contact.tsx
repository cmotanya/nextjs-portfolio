"use client";

import React, { ReactNode } from "react";
import { IconMap } from "@tabler/icons-react";
import ContactForm from "./components/contact-form";

function ContactComponent({
  icon,
  text,
  link,
}: {
  icon: ReactNode;
  text: string;
  link?: string;
}) {
  return (
    <div className="relative flex h-12 w-[25ch] items-center gap-4 rounded-md bg-accent-clr ps-3 font-semibold before:absolute before:-left-8 before:top-1/2 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-700 after:absolute after:-left-8 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-800 dark:bg-800 dark:text-400 xs:mb-0 xs:ml-0 xs:ring-2 xs:ring-700 xs:before:hidden xs:after:hidden sm:mb-2 sm:ml-10 sm:ring-0 sm:before:block md:mb-0">
      <a
        href={link}
        target="_blank"
        className="flex flex-row items-center gap-3 md:space-y-6"
      >
        {icon} {text}{" "}
      </a>
    </div>
  );
}

/* Icon Mail SVG */
const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

/* Icon Phone SVG */
const IconPhoneCall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

function Contact() {
  const accessKey = "2e3adbbc-1bf9-439a-b88a-d85e13ac63fe";

  return (
    <section id="contact" className=" mt-6 pb-24 font-semibold md:mt-10">
      <h1 className="py-3 text-4xl font-extrabold uppercase text-bright-clr dark:text-600 md:pt-0">
        Contact{" "}
      </h1>
      <div>
        <h2 className="py-3">
          Have a question or need assistance? Contact me today!
        </h2>

        <div className="mb-10 grid grid-flow-row grid-cols-1 md:mt-5 md:grid-flow-col md:grid-cols-[50%_50%]">
          <div className="mx-auto mb-6 space-y-4 dark:text-800 md:mb-0 md:ml-0">
            <ContactComponent icon={<IconMap />} text="Mombasa, Kenya" />
            <ContactComponent
              icon={<IconPhoneCall />}
              text="(+254) 712-909-475"
              link="tel:+254712909475"
            />
            <ContactComponent
              icon={<IconMail />}
              text="motanyac@gmail.com"
              link="mailto:motanyac@gmail"
            />
          </div>

          <ContactForm accessKey={accessKey} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
