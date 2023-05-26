import { GetStaticProps } from "next";
import React from "react";

import Posts from "../components/cms/Posts";
import SEO from "../components/util/SEO";
import { fetchPosts } from "../../cms/content.server";
import { Post } from "../../cms/types";

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <SEO
        title="Blog"
        description="Welcome to my blog! There may be some interesting technology-related posts for you!"
        keywords={[
          "cubxity",
          "full-stack",
          "developer",
          "minecraft",
          "sysadmin",
          "blog",
        ]}
      />
      <header className="container m-auto px-4 pt-36 pb-16">
        <div className="lg:w-1/2">
          <h1 className="py-8 text-5xl font-medium text-white md:text-6xl">
            Blog
          </h1>
          <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
            Welcome to my blog!
          </span>
        </div>
      </header>
      <main>
        <section id="posts" className="container mx-auto px-4">
          <Posts posts={posts} />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // TODO: Pagination once the number of posts grow past 20 or so
  const posts = await fetchPosts().then((posts) =>
    posts.map((post) => ({
      ...post,
      body: null,
    }))
  );

  console.log(posts)

  return {
    props: { posts },
  };
};
