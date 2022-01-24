import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import Avatar from "../../public/assets/logo/256x.png";
import Link from "../input/Link";

export default function Navigation() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY > 64);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-all duration-500",
        scroll && "bg-background shadow-2xl"
      )}
    >
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-background shadow-2xl" />
      </noscript>
      <div className="container mx-auto flex flex-row items-center gap-8">
        <NextLink href="/" passHref>
          <a className="block overflow-clip rounded-full leading-[0]">
            <Image
              src={Avatar}
              width={32}
              height={32}
              className="align-middle"
              alt="Cubxity"
              priority
            />
          </a>
        </NextLink>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <div className="grow" />
        <NextLink href="/contact" passHref>
          <a
            role="button"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            Contact
          </a>
        </NextLink>
      </div>
    </nav>
  );
}
