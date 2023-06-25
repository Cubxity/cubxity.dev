import Link from "next/link";
import type { FC } from "react";

import type { ElementProps } from "@/app/components/cms/hygraph/HygraphNode";
import type { LinkNode } from "@/lib/cms";

const HygraphLinkNode: FC<ElementProps<LinkNode>> = ({ node, children }) => (
  <Link
    href={node.href}
    target={node.openInNewTab && "_blank"}
    rel="noreferrer"
    className="break-words"
  >
    {children}
  </Link>
);

export default HygraphLinkNode;
