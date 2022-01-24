import React from "react";

import TwitterLogo from "../assets/svg/logo/fa-twitter.svg";
import AtIcon from "../assets/svg/logo/heros-at.svg";
import SEO from "../components/util/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Contact"
        description="Got an idea? Let's work together! Find ways to contact me on this page."
        keywords={[
          "cubxity",
          "full-stack",
          "developer",
          "minecraft",
          "sysadmin",
          "contact",
        ]}
      />
      <div className="h-screen min-h-[40rem] bg-gradient-to-bl from-gray-900 to-black flex flex-col relative">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <h1 className="text-7xl md:text-8xl text-white font-medium py-8">
              Contact
            </h1>
            <span className="text-xl md:text-2xl text-gray-400 leading-relaxed md:leading-relaxed">
              Got an idea? Let&apos;s get work done.
            </span>
            <ul className="flex flex-row gap-8">
              <li>
                <a
                  className="text-white font-bold my-8 block hover:text-indigo-400 transition-colors"
                  href="mailto:contact@cubxity.dev"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AtIcon className="inline w-4 h-4 mr-3" />
                  Send an email
                </a>
              </li>
              <li>
                <a
                  className="text-white font-bold my-8 block hover:text-indigo-400 transition-colors"
                  href="https://twitter.com/cubxity"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterLogo className="inline w-4 h-4 mr-3" />
                  Message on Twitter
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
