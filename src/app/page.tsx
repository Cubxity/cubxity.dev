import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import HeroBgImage from "../../assets/image/hero-bg.png";

import ScrollArrow from "./components/layout/ScrollArrow";
import Socials from "./components/layout/Socials";

const Page = () => {
  return (
    <>
      <div className="relative flex h-screen max-h-[80rem] min-h-[40rem] flex-col">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <p className="text-xl font-medium text-gray-300 mb-2">
              👋 Hey, I&apos;m Cubxity
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-relaxed md:leading-relaxed">
              Full-stack developer with{" "}
              <span className="relative inline-block">
                6+ years
                <div className="-z-10 absolute left-0 right-0 bottom-2 h-2 bg-rose-600 rounded-full" />
              </span>{" "}
              of experience.
            </h1>
            <Socials />
          </div>
          <Image
            src={HeroBgImage}
            alt=""
            className="absolute -z-50 object-cover"
            fill
          />
          {/*<HeroBgImage className="invisible absolute right-0 top-0 bottom-0 h-full lg:visible" />*/}
        </header>
        <ScrollArrow />
      </div>
      <main className="scroll-my-20"></main>
    </>
  );
};

export const metadata: Metadata = {
  title: "Home | Cubxity - Full-stack Developer",
  description:
    "Hey, I'm Cubxity. I'm a Full-stack Developer and System Administrator with 6+ years of experience.",
  keywords: [
    "cubxity",
    "full-stack",
    "developer",
    "minecraft",
    "sysadmin",
    "portfolio",
    "resume",
  ],
};

export default Page;
