import { Post } from "../../src/cms/types";

import PostCard from "./PostCard";

export interface Posts {
  posts: Post[];
}

export default function Posts({ posts }: Posts) {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8 md:pt-12">
      {posts.map((post, i) => (
        <li key={i}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
