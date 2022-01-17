import React from "react";
import Link from "../Link";

export default function Navigation() {
  return (
    <div className="container flex flex-row items-center gap-8 w-full mx-auto px-4 py-8">
      <Link href="#">
        Projects
      </Link>
      <Link href="#">
        Blog
      </Link>
      <div className="grow"/>
      {/*<NextLink href="#" passHref>
        <a className="font-xl font-semibold text-white rounded-full border-2 border-white px-8 py-2">
          Get in touch
        </a>
      </NextLink>*/}
    </div>
  );
}