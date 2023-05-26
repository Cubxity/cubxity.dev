import * as process from "process";

import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { Project } from "@/lib/cms";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const fetchProjects = async (limit: number = 3): Promise<Project[]> => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS,
    page_size: limit,
    sorts: [],
  });

  return res.results.map((page: PageObjectResponse) => ({
    title: page.properties["Name"]["title"][0].plain_text,
    description: page.properties["Description"]["rich_text"][0].plain_text,
    tags: page.properties["Tags"]["multi_select"].map((s) => s.name),
    url: page.properties["URL"]?.["url"],
  }));
};
