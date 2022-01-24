import NextLink from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-12 scroll-my-20 bg-neutral-900">
      <div className="flex flex-row items-center container m-auto px-4">
        <span className="text-xl md:text-3xl text-white font-extrabold">
          Let&apos;s work together!
        </span>
        <div className="grow" />
        <NextLink href="/contact" passHref>
          <a
            role="button"
            className="bg-indigo-600 text-white md:text-lg font-bold px-6 py-4 rounded-lg"
          >
            Contact
          </a>
        </NextLink>
      </div>
    </section>
  );
}
