export type ProjectTag =
  | "full-stack"
  | "web"
  | "backend"
  | "minecraft"
  | "devops"
  | "sysadmin";

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: ProjectTag[];
  readonly date: string;
  readonly featured: boolean;
  readonly thumbnail?: string;
  readonly links: ProjectLink[];
}

export interface ProjectLink {
  url: string;
  label: string;
}
