import MDX from "mdx-scoped-runtime";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { Post } from "../../../../cms/types";
import PostLayout from "../../layout/PostLayout";

import PreviewContainer from "./PreviewContainer";

export default function PostPreview({ entry }: PreviewTemplateComponentProps) {
  const post: Omit<Post, "body"> = {
    slug: entry.getIn(["data", "slug"]),
    title: entry.getIn(["data", "title"]),
    description: entry.getIn(["data", "description"]),
    tags: entry.getIn(["data", "tags"], []),
    created: entry.getIn(["data", "created"]),
    updated: entry.getIn(["data", "updated"]),
    thumbnail: entry.getIn(["data", "thumbnail"]),
    year: 0, // This is irrelevant
  };

  const body = entry.getIn(["data", "body"]);

  return (
    <PreviewContainer>
      <PostLayout post={post}>
        <MDX>{body}</MDX>
      </PostLayout>
    </PreviewContainer>
  );
}
