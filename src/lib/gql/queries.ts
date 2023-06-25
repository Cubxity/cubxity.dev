import { ApolloQueryResult, gql } from "@apollo/client";

import {
  client,
  GetClientResponse,
  GetClientsResponse,
  GetPostResponse,
  GetPostsResponse,
  GetProjectsResponse,
} from "@/lib/gql/index";

export const getProjects = (): Promise<
  ApolloQueryResult<GetProjectsResponse>
> =>
  client.query({
    query: GET_PROJECTS,
  });

export const getClients = (): Promise<ApolloQueryResult<GetClientsResponse>> =>
  client.query({
    query: GET_CLIENTS,
  });

export const getClientBySlug = (
  slug: string
): Promise<ApolloQueryResult<GetClientResponse>> =>
  client.query({
    query: GET_CLIENT_BY_SLUG,
    variables: { slug },
  });

export const getPosts = (): Promise<ApolloQueryResult<GetPostsResponse>> =>
  client.query({
    query: GET_POSTS,
  });

export const getPostBySlug = (
  slug: string
): Promise<ApolloQueryResult<GetPostResponse>> =>
  client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

const GET_PROJECTS = gql`
  {
    projects {
      id
      slug
      title
      meta {
        description
        tags
      }
      url
    }
  }
`;

const GET_CLIENTS = gql`
  {
    clients {
      id
      slug
      name
      meta {
        description
        tags
      }
      icon {
        url
      }
      startYear
      endYear
    }
  }
`;

const GET_CLIENT_BY_SLUG = gql`
  query ($slug: String) {
    client(where: { slug: $slug }) {
      id
      slug
      name
      meta {
        description
        tags
      }
      icon {
        url
      }
      startYear
      endYear
      content {
        json
      }
    }
  }
`;

const GET_POSTS = gql`
  {
    posts {
      id
      publishedAt
      updatedAt
      slug
      title
      meta {
        description
        tags
      }
      coverImage {
        url
      }
    }
  }
`;

const GET_POST_BY_SLUG = gql`
  query ($slug: String) {
    post(where: { slug: $slug }) {
      id
      publishedAt
      updatedAt
      slug
      title
      meta {
        description
        tags
      }
      coverImage {
        url
      }
      content {
        json
      }
    }
  }
`;
