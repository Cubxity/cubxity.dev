import HygraphNode from "@/app/components/cms/hygraph/HygraphNode";
import type { RichTextNode, Text } from "@/lib/cms";

export interface HygraphNodesProps {
  nodes: (RichTextNode | Text)[];
}

const HygraphNodes = ({ nodes }: HygraphNodesProps) => {
  return (
    <>
      {nodes.map((node, i) => (
        <HygraphNode node={node} key={i} />
      ))}
    </>
  );
};

export default HygraphNodes;
