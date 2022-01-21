import Link from "next/link";
import React from "react";

import SEO from "../components/SEO";
import Navigation from "../components/layout/Navigation";

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
      <div className="h-screen min-h-[40rem] bg-gradient-to-bl from-gray-900 to-black flex flex-col relative">
        <Navigation />
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <h1 className="text-7xl md:text-8xl text-white font-medium py-8">
              404
            </h1>
            <span className="text-xl md:text-2xl text-gray-400 leading-relaxed md:leading-relaxed">
              Beep boop? The content you were looking for is not found.
            </span>
            <Link href="/" passHref>
              <a className="text-white text-xl font-bold my-8 block">
                Take me home!
              </a>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
