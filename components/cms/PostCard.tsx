import Image from "next/image";
import Link from "next/link";

import { Post } from "../../src/cms/types";

interface PostTagProps {
  tag: string;
}

const PostTag = ({ tag }: PostTagProps) => {
  return (
    <span className="text-xs font-bold uppercase text-neutral-400">#{tag}</span>
  );
};

export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex h-full snap-center flex-col overflow-clip rounded-lg bg-neutral-800 transition-transform sm:hover:scale-[102%]">
      <Link href={`/blog/${post.year}/${post.slug}`} passHref>
        <a>
          <div className="relative aspect-video bg-black">
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                alt=""
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
          <div className="flex grow flex-col p-4">
            <ul className="flex gap-2 pb-3">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <PostTag tag={tag} />
                </li>
              ))}
            </ul>
            <h3 className="pb-2 font-bold text-white">{post.title}</h3>
            <span className="grow text-neutral-300">{post.description}</span>
            <span className="mt-2 text-neutral-500">
              {new Date(post.created).toDateString()}
            </span>
          </div>
        </a>
      </Link>
    </article>
  );
}
