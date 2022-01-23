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
      <header className="flex flex-col justify-center items-center text-center px-4 pt-44 pb-4 md:pb-16 w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto">
        <span className="text-md md:text-lg text-neutral-400 font-medium">
          {new Date(post.created).toDateString()}
        </span>
        <h1 className="text-white text-3xl md:text-6xl font-bold mt-4 mb-6 md:mb-8">
          {post.title}
        </h1>
        <p className="text-neutral-200 text-xl">{post.description}</p>
        <div className="relative w-full mt-16 md:rounded-2xl overflow-hidden aspect-video">
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              objectFit="contain"
              layout="fill"
              alt=""
              priority
            />
          )}
        </div>
      </header>
      <main className="m-auto px-4">
        <article className="prose lg:prose-lg prose-invert prose-headings:mt-10 lg:prose-headings:mt-12 prose-headings:scroll-my-20 m-auto">
          {children}
        </article>
        <div className="h-24" />
      </main>
    </>
  );
}
