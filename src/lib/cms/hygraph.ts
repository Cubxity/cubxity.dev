export interface Mark {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

export interface Text extends Mark {
  text: string;
}

export interface HeadingNode {
  type:
    | "heading-one"
    | "heading-two"
    | "heading-three"
    | "heading-four"
    | "heading-five"
    | "heading-six";
}

export interface ParagraphNode {
  type: "paragraph";
}

export interface LinkNode {
  type: "link";
  href: string;
}

export interface ImageNode {
  type: "image";
  src: string;
  altText: string;
}

export type RichTextNode = { children?: Array<Text | RichTextNode> } & (
  | HeadingNode
  | ParagraphNode
  | LinkNode
  | ImageNode
);

export interface RichText {
  children: RichTextNode[];
}
