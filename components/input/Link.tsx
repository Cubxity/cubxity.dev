import clsx from "clsx";
import NextLink from "next/link";
import React from "react";

export interface LinkProps {
  href: string;
  className?: string;
  children: string;
}

export default function Link(props: LinkProps) {
  const { href, className, children } = props;

  return (
    <NextLink href={href} passHref>
      <a
        className={clsx(
          "text-sm font-medium text-white transition-colors hover:text-indigo-400",
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  );
}
