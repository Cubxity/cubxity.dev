import { Post } from "../../src/cms/types";

import PostCard from "./PostCard";

export interface Posts {
  posts: Post[];
}

export default function Posts({ posts }: Posts) {
  return (
    <ul className="grid gap-6 pt-8 md:grid-cols-2 md:pt-12 xl:grid-cols-4">
      {posts.map((post, i) => (
        <li key={i}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
