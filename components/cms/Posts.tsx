import { Post } from "../../src/cms/types";

import PostCard from "./PostCard";

export interface Posts {
  posts: Post[];
}

export default function Posts({ posts }: Posts) {
  return (
    <ul className="flex overflow-x-auto sm:overflow-x-visible snap-proximity snap-x pb-2 sm:pb-0 sm:flex-none sm:grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8 md:pt-12">
      {posts.map((post, i) => (
        <li key={i}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
