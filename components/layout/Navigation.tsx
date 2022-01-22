import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import Avatar from "../../public/assets/logo/256x.png";
import Link from "../Link";

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
        "fixed top-0 left-0 right-0 px-4 py-6 z-50 transition-all duration-500",
        scroll && "bg-background shadow-2xl"
      )}
    >
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-background shadow-2xl -z-10" />
      </noscript>
      <ul className="container mx-auto flex flex-row items-center gap-8">
        <li>
          <NextLink href="/" passHref>
            <a className="block leading-[0] rounded-full overflow-clip">
              <Image
                src={Avatar}
                width={32}
                height={32}
                className="align-middle"
                alt="Cubxity"
                placeholder="blur"
                priority
              />
            </a>
          </NextLink>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
