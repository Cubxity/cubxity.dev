import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import React, { FC } from "react";

import PostLayout from "../../../components/layout/PostLayout";
import PostSEO from "../../../components/util/PostSEO";
import { fetchPost, listPosts } from "../../../src/cms/content.server";
import { Post } from "../../../src/cms/types";

interface PostPageProps {
  post: Omit<Post, "body">;
  source: MDXRemoteSerializeResult;
}

const components: Record<string, FC> = {
  a: (props) => <a {...props} rel="noreferrer" target="_blank" />,
};

export default function PostPage({ post, source }: PostPageProps) {
  return (
    <>
      <PostSEO post={post} />
      <PostLayout post={post}>
        <MDXRemote {...source} components={components} />
      </PostLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { year, slug } = context.params;
  const post = await fetchPost(year as string, slug as string);
  const source = await serialize(post.body);

  return {
    props: {
      post: { ...post, body: null },
      source,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await listPosts();

  console.log(posts);
  return {
    paths: posts.map((post) => ({
      params: {
        year: String(post.year),
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
