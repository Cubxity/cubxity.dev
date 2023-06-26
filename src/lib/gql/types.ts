import type {
  Client,
  ClientPreview,
  Post,
  PostPreview,
  Project,
} from "@/lib/cms";

export interface GetProjectsResponse {
  projects: Project[];
}

export interface GetClientsResponse {
  clients: ClientPreview[];
}

export interface GetClientResponse {
  client: Client;
}

export interface GetPostsResponse {
  posts: PostPreview[];
}

export interface GetPostResponse {
  post: Post;
}
