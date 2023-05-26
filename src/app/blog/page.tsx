import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const BlogHome = () => {
  return (
    <div className="relative flex h-screen min-h-[40rem] flex-col items-center justify-center">
      <header className="max-w-screen-xl w-full px-4">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            🚧 Under Construction
          </h1>
          <span className="text-xl leading-relaxed text-gray-400 md:leading-relaxed">
            This page is under construction, come back again later!
          </span>
          <Link
            href="/"
            className="my-8 block font-bold text-white transition-colors hover:text-indigo-400"
          >
            Take me home!
          </Link>
        </div>
      </header>
    </div>
  );
};

export default BlogHome;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Welcome to my personal blog, where I delve into the realms of software development, engineering, system administration and the captivating world of DevOps.",
  keywords: [
    "cubxity",
    "full-stack",
    "developer",
    "minecraft",
    "sysadmin",
    "devops",
    "blog",
  ],
};
