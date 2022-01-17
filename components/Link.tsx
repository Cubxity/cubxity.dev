import NextLink from "next/link";
import React from "react";

export interface LinkProps {
  href: string;
  children: string;
}

export default function Link(props: LinkProps) {
  const {href, children} = props;

  return (
    <NextLink href={href} passHref>
      <a className="text-sm text-white font-medium">
        {children}
      </a>
    </NextLink>
  )
}