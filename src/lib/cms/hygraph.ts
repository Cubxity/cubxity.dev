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

export interface CodeBlockNode {
  type: "code-block";
}

export interface ListNode {
  type: "bulleted-list" | "numbered-list";
}

export interface ListItemNode {
  type: "list-item";
}

export interface ListItemChildNode {
  type: "list-item-child";
}

export interface LinkNode {
  type: "link";
  href: string;
  openInNewTab?: boolean;
}

export interface ImageNode {
  type: "image";
  src: string;
  altText: string;
  width: number;
  height: number;
}

export type RichTextNode = { children?: Array<Text | RichTextNode> } & (
  | HeadingNode
  | ParagraphNode
  | CodeBlockNode
  | ListNode
  | ListItemNode
  | ListItemChildNode
  | LinkNode
  | ImageNode
);

export interface RichText {
  children: RichTextNode[];
}
