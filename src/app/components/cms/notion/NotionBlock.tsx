import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

import NotionRichTextBlock from "@/app/components/cms/notion/NotionRichTextBlock";

export interface NotionBlockProps {
  block: BlockObjectResponse;
}

const NotionBlock = ({ block }: NotionBlockProps) => {
  switch (block.type) {
    case "heading_1":
      return (
        <h1>
          <NotionRichTextBlock items={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <NotionRichTextBlock items={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <NotionRichTextBlock items={block.heading_3.rich_text} />
        </h3>
      );
    case "paragraph":
      return (
        <p>
          <NotionRichTextBlock items={block.paragraph.rich_text} />
        </p>
      );
    case "image":
      return (
        <div className="not-prose mt-6">
          <div className="relative aspect-video rounded-xl overflow-clip">
            <Image
              className="object-cover bg-gray-700"
              src={
                block.image.type === "file"
                  ? block.image.file.url
                  : block.image.external.url
              }
              alt=""
              fill
              unoptimized={block.image.type === "external"}
            />
          </div>
          <p className="text-gray-500 text-sm mt-4">
            <NotionRichTextBlock items={block.image.caption} />
          </p>
        </div>
      );
  }

  return <p className="text-red-500">Unsupported block: {block.type}</p>;
};

export default NotionBlock;
