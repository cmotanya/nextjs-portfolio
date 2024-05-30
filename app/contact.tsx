"use client";

import React from "react";
import { IconDeviceMobile, IconMail, IconMap } from "@tabler/icons-react";
import ContactForm from "./components/contact-form";
import ContactComponent from "./components/contact-cards";
import PhoneIcon from "../public/svg/phone-icon.svg";
import MailIcon from "../public/svg/mail-icon.svg";

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
              icon={<IconDeviceMobile />}
              text="(+254)712-909-475"
              link={"tel:+254712909475"}
            />
            <ContactComponent
              icon={<IconMail />}
              text="motanyac@gmail.com"
              link={"mailto:motanyac@gmail"}
            />
          </div>

          <ContactForm accessKey={accessKey} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
