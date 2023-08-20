import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";

import PostCard from "@/app/components/cms/blog/PostCard";
import { getPosts } from "@/lib/gql";

const BlogHome = async () => {
  const { data } = await getPosts();

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
      <main className="max-w-screen-xl mx-auto px-4 flex flex-col gap-8 pb-16">
        {data.posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
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
  openGraph: {
    siteName: "Cubxity — Full-stack Developer",
    images: ["/assets/logo/256x.png"],
    title: "Blog",
    description:
      "Welcome to my personal blog, where I delve into the realms of software development, engineering, system administration and the captivating world of DevOps.",
  },
};
