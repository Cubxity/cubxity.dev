import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Link from "../Link";

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="container w-full mx-auto px-4 py-8">
      <ul className="flex flex-row items-center gap-8">
        {router.route !== "/" && (
          <li>
            <Link href="/">Cubxity</Link>
          </li>
        )}
        {/*<li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>*/}
      </ul>
      <div className="grow" />
    </nav>
  );
}
