import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Avatar from "../../../../public/assets/logo/256x.png";

import HygraphNodes from "@/app/components/cms/hygraph/HygraphNodes";
import ContactButton from "@/app/components/input/ContactButton";
import { getPostBySlug, getPosts } from "@/lib/gql";

export interface BlogPageProps {
  params: { slug: string };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { data } = await getPostBySlug(params.slug);

  return (
    <>
      <header className="mx-auto w-full max-w-screen-lg px-4 pt-24 mb-4 md:pt-36 md:pb-8 md:w-5/6 lg:w-2/3">
        <Link
          href="/blog"
          className="text-gray-400 flex flex-row items-center gap-2 transition-colors hover:text-indigo-400 mb-10"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          Blog
        </Link>
        <div className="flex flex-col items-center text-center">
          <span className="text-md font-medium text-neutral-400 md:text-lg">
            {new Date(data.post.updatedAt).toDateString()}
          </span>
          <h1 className="mt-4 mb-4 text-3xl font-bold text-white md:mb-8 md:text-6xl">
            {data.post.title}
          </h1>
          <p className="md:text-xl text-neutral-200">
            {data.post.meta.description}
          </p>
          {data.post.coverImage && (
            <div className="relative mt-16 aspect-video w-full overflow-hidden md:rounded-2xl">
              <Image src={data.post.coverImage.url} fill alt="" priority />
            </div>
          )}
        </div>
      </header>
      <main className="m-auto px-4 pb-24">
        <article className="prose prose-invert prose-headings:mb-4 prose-headings:mt-10 prose-headings:scroll-my-20 lg:prose-lg lg:prose-headings:mt-12 mx-auto">
          <HygraphNodes nodes={data.post.content.json.children} />
        </article>
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 rounded-lg p-6 max-w-screen-md mx-auto mt-16">
          <div className="w-16 h-16 relative">
            <Image
              src={Avatar}
              className="align-middle bg-gray-600 rounded-full"
              alt="Cubxity"
              sizes="4rem"
              fill
            />
          </div>
          <div className="sm:flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold mb-2">Written by Cubxity</h2>
            <p>Full-stack developer</p>
          </div>
          <ContactButton />
        </div>
      </main>
    </>
  );
};

export default BlogPage;

export const generateStaticParams = async () => {
  const { data } = await getPosts();
  return data.posts.map(({ slug }) => ({ slug }));
};
