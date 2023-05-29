import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import NotionRichText from "@/app/components/cms/notion/NotionRichText";

export interface NotionRichTextBlockProps {
  items: RichTextItemResponse[];
}

const NotionRichTextBlock = ({ items }: NotionRichTextBlockProps) => {
  return (
    <>
      {items.map((item, i) => (
        <NotionRichText item={item} key={i} />
      ))}
    </>
  );
};

export default NotionRichTextBlock;
