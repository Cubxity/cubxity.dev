import Link from "next/link";
import React from "react";

import SEO from "./components/util/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Not Found"
        description="The requested page does not exist. Perhaps check out the other pages?"
        keywords={[
          "cubxity",
          "full-stack",
          "developer",
          "minecraft",
          "sysadmin",
          "portfolio",
          "resume",
        ]}
      />
      <div className="relative flex h-screen min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              404
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              Beep boop? The content you were looking for is not found.
            </span>
            <Link
              href="/"
              className="my-8 block text-xl font-bold text-white transition-colors hover:text-indigo-400"
            >
              Take me home!
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
