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
