export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Client {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  cover?: string;
  start?: number;
  end?: number;
}
