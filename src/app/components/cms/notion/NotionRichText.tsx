import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export interface NotionRichTextProps {
  item: RichTextItemResponse;
}

const NotionRichText = ({ item }: NotionRichTextProps) => {
  // TODO: Proper rich text rendering
  return <>{item.plain_text}</>;
};

export default NotionRichText;
