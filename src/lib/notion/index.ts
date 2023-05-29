import * as process from "process";

import { Client as NotionClient } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { Client, Project } from "@/lib/cms";

export interface Page<M> {
  meta: M;
  blocks: BlockObjectResponse[];
}

const notion = new NotionClient({
  auth: process.env.NOTION_API_KEY,
});

export const fetchProjects = async (limit: number = 6): Promise<Project[]> => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS,
    page_size: limit,
    sorts: [
      {
        property: "Order",
        direction: "ascending",
      },
    ],
  });

  return res.results.map((page: PageObjectResponse) => ({
    title: page.properties["Name"]["title"][0].plain_text,
    description: page.properties["Description"]["rich_text"][0].plain_text,
    tags: page.properties["Tags"]["multi_select"].map((s) => s.name),
    url: page.properties["URL"]?.["url"],
  }));
};

export const fetchClients = async (limit: number = 6): Promise<Client[]> => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_CLIENTS,
    page_size: limit,
    sorts: [
      {
        property: "Order",
        direction: "ascending",
      },
    ],
  });
  console.log(JSON.stringify(res));

  return res.results.map((page: PageObjectResponse) => ({
    name: page.properties["Name"]["title"][0].plain_text,
    slug: page.properties["Slug"]["rich_text"][0].plain_text,
    description: page.properties["Description"]["rich_text"][0].plain_text,
    icon: page.properties["Icon"]?.["files"]?.[0]?.file?.url,
    cover: page.properties["Cover"]?.["files"]?.[0]?.file?.url,
    start: page.properties["Start"]?.["number"],
    end: page.properties["End"]?.["number"],
  }));
};

export const fetchClientBySlug = async (
  slug: string
): Promise<Page<Client> | undefined> => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_CLIENTS,
    page_size: 1,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  const page = res.results[0] as PageObjectResponse;
  if (!page) return undefined;

  const block = await notion.blocks.children.list({
    block_id: page.id,
  });

  return {
    meta: {
      name: page.properties["Name"]["title"][0].plain_text,
      slug: page.properties["Slug"]["rich_text"][0].plain_text,
      description: page.properties["Description"]["rich_text"][0].plain_text,
      icon: page.properties["Icon"]?.["files"]?.[0]?.file?.url,
      cover: page.properties["Cover"]?.["files"]?.[0]?.file?.url,
      start: page.properties["Start"]?.["number"],
      end: page.properties["End"]?.["number"],
    },
    blocks: block.results as BlockObjectResponse[],
  };
};
