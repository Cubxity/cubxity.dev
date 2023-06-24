import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";

export * from "./queries";
export * from "./types";

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_URL,
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([new RetryLink(), httpLink]),
  cache: new InMemoryCache(),
});
