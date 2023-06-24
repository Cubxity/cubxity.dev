import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/lib/gql";

const BlogHome = async () => {
  const { data } = await getPosts();

  // TODO: Improve this
  const featuredPost = data.posts?.[0];

  return (
    <>
      <header className="max-w-screen-xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-24">
        <Link
          href="/"
          className="text-gray-400 flex flex-row items-center gap-2 transition-colors hover:text-indigo-400"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          Home
        </Link>
        <div className="flex flex-row items-center gap-4 my-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Blog
          </h1>
        </div>
      </header>
      <main className="max-w-screen-xl mx-auto px-4">
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="aspect-video relative w-full md:w-auto md:flex-1">
                <Image
                  className="rounded-lg object-cover"
                  src={featuredPost.coverImage.url}
                  alt=""
                  fill
                  priority
                />
              </div>
              <div className="md:flex-1">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 hover:underline">
                  {featuredPost.title}
                </h2>
                <p className="md:text-xl text-gray-300">
                  {featuredPost.meta.description}
                </p>
              </div>
            </article>
          </Link>
        )}
      </main>
    </>
  );
};

export default BlogHome;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Welcome to my personal blog, where I delve into the realms of software development, engineering, system administration and the captivating world of DevOps.",
  keywords: [
    "cubxity",
    "full-stack",
    "developer",
    "minecraft",
    "sysadmin",
    "devops",
    "blog",
  ],
};
