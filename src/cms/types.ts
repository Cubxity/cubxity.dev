export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags?: string[];
  readonly created: string;
  readonly featured: boolean;
  readonly thumbnail?: string;
  readonly links?: ProjectLink[];
}

export interface ProjectLink {
  url: string;
  label: string;
}

export interface Post {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly created: string;
  readonly updated: string;
  readonly thumbnail?: string;
  readonly body: string;

  // Injected
  readonly year: number;
}
