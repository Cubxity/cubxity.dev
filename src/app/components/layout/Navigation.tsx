import Image from "next/image";
import NextLink from "next/link";
import React from "react";

import Avatar from "../../../../public/assets/logo/256x.png";
import Link from "../input/Link";

import NavigationWrapper from "./NavigationWrapper";

import ContactButton from "@/app/components/input/ContactButton";

export default function Navigation() {
  return (
    <NavigationWrapper className="fixed top-0 left-0 right-0 z-50 transition-all duration-100">
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-background shadow-2xl" />
      </noscript>
      <div className="max-w-screen-xl mx-auto flex flex-row items-center gap-6 px-4 py-6">
        <NextLink
          href="/"
          className="mr-2 block overflow-clip rounded-full leading-[0] flex-none relative w-8 h-8"
        >
          <Image
            src={Avatar}
            className="align-middle"
            alt="Cubxity"
            sizes="2rem"
            fill
            priority
          />
        </NextLink>
        <Link href="/blog">Blog</Link>
        <Link href="https://docs.cubxity.dev" target="_blank">
          Docs
        </Link>
        <div className="grow" />
        <ContactButton />
      </div>
    </NavigationWrapper>
  );
}
