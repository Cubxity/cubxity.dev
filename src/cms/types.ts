export type ProjectTag =
  | "full-stack"
  | "web"
  | "backend"
  | "minecraft"
  | "devops"
  | "sysadmin";

export interface Project {
  readonly tags: ProjectTag[];
  readonly name: string;
  readonly description: string;


}
