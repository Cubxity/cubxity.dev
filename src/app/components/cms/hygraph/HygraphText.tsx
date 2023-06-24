import type { Text } from "@/lib/cms";

export interface HygraphTextProps {
  node: Text;
}

const HygraphText = ({ node }: HygraphTextProps) => {
  const { text, bold, italic, underline, code } = node;

  let element = <>{text}</>;

  if (bold) element = <strong>{element}</strong>;
  if (italic) element = <em>{element}</em>;
  if (underline) element = <ins>{element}</ins>;
  if (code) element = <code>{element}</code>;

  return element;
};

export default HygraphText;
