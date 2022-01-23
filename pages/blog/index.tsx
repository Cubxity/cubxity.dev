import { GetStaticProps } from "next";
import React from "react";

import SEO from "../../components/SEO";
import Posts from "../../components/cms/Posts";
import { fetchPosts } from "../../src/cms/content.server";
import { Post } from "../../src/cms/types";

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
          <h1 className="text-5xl md:text-6xl text-white font-medium py-8">
            Blog
          </h1>
          <span className="text-xl md:text-2xl text-gray-400 leading-relaxed md:leading-relaxed">
            Welcome to my blog!
          </span>
        </div>
      </header>
      <main>
        <section id="posts" className="container mx-auto">
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

  return {
    props: { posts },
  };
};
