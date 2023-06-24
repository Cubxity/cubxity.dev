import { FC, ReactNode } from "react";

import HygraphNodes from "@/app/components/cms/hygraph/HygraphNodes";
import HygraphText from "@/app/components/cms/hygraph/HygraphText";
import HygraphImageNode from "@/app/components/cms/hygraph/elements/HygraphImageNode";
import HygraphLinkNode from "@/app/components/cms/hygraph/elements/HygraphLinkNode";
import type { RichTextNode, Text } from "@/lib/cms";

export interface HygraphNodeProps {
  node: RichTextNode | Text;
}

export interface ElementProps<N extends RichTextNode> {
  node: N;
  children?: ReactNode;
}

const elements: Partial<Record<RichTextNode["type"], FC<ElementProps<any>>>> = {
  "heading-one": ({ children }) => <h1>{children}</h1>,
  "heading-two": ({ children }) => <h2>{children}</h2>,
  "heading-three": ({ children }) => <h3>{children}</h3>,
  "heading-four": ({ children }) => <h4>{children}</h4>,
  "heading-five": ({ children }) => <h5>{children}</h5>,
  "heading-six": ({ children }) => <h6>{children}</h6>,
  paragraph: ({ children }) => <p>{children}</p>,
  link: HygraphLinkNode,
  image: HygraphImageNode,
};

const HygraphNode = ({ node }: HygraphNodeProps) => {
  if ("text" in node) {
    return <HygraphText node={node} />;
  } else {
    const ElementRenderer = elements[node.type];
    if (ElementRenderer) {
      return (
        <ElementRenderer node={node}>
          {node.children && <HygraphNodes nodes={node.children} />}
        </ElementRenderer>
      );
    }
  }

  return (
    <span className="bg-red-500 font-medium p-1 rounded-md">
      Unsupported node: {JSON.stringify(node)}
    </span>
  );
};

export default HygraphNode;
