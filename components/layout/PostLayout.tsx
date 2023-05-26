import Image from "next/image";
import React, { ReactNode } from "react";

import { Post } from "../../src/cms/types";

export interface PostLayoutProps {
  post: Omit<Post, "body">;
  children: ReactNode;
}

export default function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <>
      <header className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-4 pt-44 pb-4 text-center md:w-5/6 md:pb-16 lg:w-2/3">
        <span className="text-md font-medium text-neutral-400 md:text-lg">
          {new Date(post.created).toDateString()}
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold text-white md:mb-8 md:text-6xl">
          {post.title}
        </h1>
        <p className="text-xl text-neutral-200">{post.description}</p>
        <div className="relative mt-16 aspect-video w-full overflow-hidden md:rounded-2xl">
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              fill
              alt=""
              className="object-cover"
              priority
            />
          )}
        </div>
      </header>
      <main className="m-auto px-4">
        <article className="prose prose-invert m-auto prose-headings:mt-10 prose-headings:scroll-my-20 lg:prose-lg lg:prose-headings:mt-12">
          {children}
        </article>
        <div className="h-24" />
      </main>
    </>
  );
}
