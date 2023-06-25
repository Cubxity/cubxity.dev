import { RichText } from "@/lib/cms/hygraph";

export interface Meta {
  description: string;
  tags: string[];
}

export interface Asset {
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  meta: Meta;
  url?: string;
}

export interface ClientPreview {
  id: string;
  slug: string;
  name: string;
  meta: Meta;
  icon?: Asset;
  cover?: string;
  startYear?: number;
  endYear?: number;
}

export interface Client extends ClientPreview {
  content: {
    json: RichText;
  } | null;
}

export interface PostPreview {
  id: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  meta: Meta;
  coverImage?: Asset;
}

export interface Post extends PostPreview {
  content: {
    json: RichText;
  } | null;
}
