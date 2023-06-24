import type { Client, ClientPreview, Project } from "@/lib/cms";

export interface GetProjectsResponse {
  projects: Project[];
}

export interface GetClientsResponse {
  clients: ClientPreview[];
}

export interface GetClientResponse {
  client: Client;
}
