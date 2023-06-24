import Image from "next/image";
import type { FC } from "react";

import type { ElementProps } from "@/app/components/cms/hygraph/HygraphNode";
import type { ImageNode } from "@/lib/cms";

const HygraphImageNode: FC<ElementProps<ImageNode>> = ({ node }) => (
  <div className="not-prose mt-6">
    <div className="relative aspect-video rounded-xl overflow-clip">
      <Image
        className="object-cover bg-gray-700"
        src={node.src}
        alt={node.altText}
        fill
      />
    </div>
    <p className="text-gray-500 italic text-sm mt-4">{node.altText}</p>
  </div>
);

export default HygraphImageNode;
