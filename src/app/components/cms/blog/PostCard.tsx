import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { PostPreview } from "@/lib/cms";

export interface PostCardProps {
  post: PostPreview;
}
const PostCard: FC<PostCardProps> = ({ post }: PostCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="aspect-video relative w-full md:w-auto md:flex-1">
          <Image
            className="rounded-lg object-cover"
            src={post.coverImage.url}
            alt=""
            fill
            priority
          />
        </div>
        <div className="md:flex-1 flex flex-col gap-4">
          <time
            className="md:text-xl text-gray-500"
            dateTime={post.publishedAt ?? post.updatedAt}
          >
            {new Date(post.publishedAt ?? post.updatedAt).toDateString()}
          </time>
          <h2 className="text-2xl md:text-4xl font-bold hover:underline">
            {post.title}
          </h2>
          <p className="md:text-xl text-gray-300">{post.meta.description}</p>
        </div>
      </article>
    </Link>
  );
};
export default PostCard;
