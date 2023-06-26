import type { FC } from "react";

import type { ElementProps } from "@/app/components/cms/hygraph/HygraphNode";
import type { CodeBlockNode } from "@/lib/cms";

// TODO: Syntax highlighting?
const HygraphCodeBlock: FC<ElementProps<CodeBlockNode>> = ({ children }) => (
  <pre>{children}</pre>
);

export default HygraphCodeBlock;
