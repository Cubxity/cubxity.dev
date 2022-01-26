import NextLink from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-my-20 bg-neutral-900 py-8 md:py-12">
      <div className="container m-auto flex flex-row items-center px-4">
        <span className="text-xl font-extrabold text-white md:text-3xl">
          Let&apos;s work together!
        </span>
        <div className="grow" />
        <NextLink href="/contact" passHref>
          <a
            role="button"
            className="py-2 rounded-lg bg-indigo-600 px-4 font-bold text-white sm:px-6 sm:py-4 md:text-lg"
          >
            Contact
          </a>
        </NextLink>
      </div>
    </section>
  );
}
