import Image from "next/image";
import type { FC } from "react";

import type { ElementProps } from "@/app/components/cms/hygraph/HygraphNode";
import type { ImageNode } from "@/lib/cms";

const HygraphImageNode: FC<ElementProps<ImageNode>> = ({ node }) => (
  <div className="not-prose mt-6">
    <div
      className="relative aspect-video md:rounded-md overflow-clip"
      style={{
        aspectRatio: node.width / node.height,
      }}
    >
      <Image
        className="object-cover bg-gray-700"
        src={node.src}
        alt={node.altText}
        fill
      />
    </div>
    <p className="text-gray-400 italic text-sm mt-2">{node.altText}</p>
  </div>
);

export default HygraphImageNode;
