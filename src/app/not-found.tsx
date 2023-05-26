import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="relative flex h-screen min-h-[40rem] flex-col">
      <header className="container m-auto px-4">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            404
          </h1>
          <span className="text-xl leading-relaxed text-gray-400 md:leading-relaxed">
            Beep boop? The content you were looking for is not found.
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

export default NotFound;

export const metadata: Metadata = {
  title: "Not Found",
  description:
    "The requested page does not exist. Perhaps check out the other pages?",
};
