import { Metadata } from "next";
import React from "react";

import TwitterLogo from "../../../assets/svg/logo/fa-twitter.svg";
import AtIcon from "../../../assets/svg/logo/heros-at.svg";

const Contact = () => {
  return (
    <div className="relative flex h-screen min-h-[40rem] flex-col items-center justify-center">
      <header className="max-w-screen-xl w-full px-4">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Contact
          </h1>
          <span className="text-xl leading-relaxed text-gray-400 md:leading-relaxed">
            Got an idea? Let&apos;s get work done.
          </span>
          <ul className="flex flex-col md:flex-row md:gap-8 gap-2 mt-8">
            <li>
              <a
                className="block font-bold text-white transition-colors hover:text-indigo-400"
                href="mailto:contact@cubxity.dev"
                rel="noreferrer"
                target="_blank"
              >
                <AtIcon className="mr-3 inline h-4 w-4" />
                Send an email
              </a>
            </li>
            <li>
              <a
                className="block font-bold text-white transition-colors hover:text-indigo-400"
                href="https://twitter.com/cubxity"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterLogo className="mr-3 inline h-4 w-4" />
                Message on Twitter
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Contact;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got an idea? Let's work together! Find ways to contact me on this page.",
  keywords: [
    "cubxity",
    "full-stack",
    "developer",
    "minecraft",
    "sysadmin",
    "contact",
  ],
};
