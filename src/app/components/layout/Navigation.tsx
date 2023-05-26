import Image from "next/image";
import NextLink from "next/link";
import React from "react";

import Avatar from "../../../../public/assets/logo/256x.png";
import Link from "../input/Link";

import NavigationWrapper from "./NavigationWrapper";

export default function Navigation() {
  return (
    <NavigationWrapper className="fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-all duration-500">
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-background shadow-2xl" />
      </noscript>
      <div className="container mx-auto flex flex-row items-center gap-6">
        <NextLink
          href="/"
          className="mr-2 block overflow-clip rounded-full leading-[0]"
        >
          <Image
            src={Avatar}
            width={32}
            height={32}
            className="align-middle"
            alt="Cubxity"
            priority
          />
        </NextLink>
        <Link href="/blog">Blog</Link>
        <Link href="https://docs.cubxity.dev" target="_blank">
          Docs
        </Link>
        <div className="grow" />
        <NextLink
          href="/contact"
          role="button"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          Contact
        </NextLink>
      </div>
    </NavigationWrapper>
  );
}
