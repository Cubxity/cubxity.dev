import Image from "next/image";
import Link from "next/link";

import { Post } from "../../src/cms/types";

interface PostTagProps {
  tag: string;
}

const PostTag = ({ tag }: PostTagProps) => {
  return (
    <span className="text-xs text-neutral-400 font-bold uppercase">#{tag}</span>
  );
};

export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col w-80 sm:w-auto bg-neutral-800 overflow-clip rounded-lg sm:hover:scale-[102%] transition-transform snap-center h-full">
      <Link href={`/blog/${post.year}/${post.slug}`} passHref>
        <a>
          <div className="aspect-video bg-black relative">
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                alt=""
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
          <div className="p-4 flex flex-col grow">
            <ul className="pb-3 flex gap-2">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <PostTag tag={tag} />
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold pb-2">{post.title}</h3>
            <span className="text-neutral-300 grow">{post.description}</span>
            <span className="text-neutral-500 mt-2">
              {new Date(post.created).toDateString()}
            </span>
          </div>
        </a>
      </Link>
    </article>
  );
}
