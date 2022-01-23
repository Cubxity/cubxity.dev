import * as fs from "fs";
import { join, basename } from "path";
import { promisify } from "util";

import matter from "gray-matter";

import { Post, Project } from "./types";

const lstatAsync = promisify(fs.lstat);
const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

const readFiles = async <T>(kind: string): Promise<T[]> => {
  const root = join("content", kind);
  const list = [];

  for await (const path of recurseDirectory(root)) {
    const data = (await readFile(path)) as object;
    if (data) {
      list.push(data);
    } else {
      console.warn(`[content] unrecognized file: ${path}, skipping...`);
    }
  }

  return list;
};

async function* recurseDirectory(root: string): AsyncGenerator<string> {
  const files = await readdirAsync(root);
  for (const file of files) {
    const path = join(root, file);
    const stat = await lstatAsync(path);

    if (stat.isFile()) {
      yield path;
    } else if (stat.isDirectory()) {
      yield* recurseDirectory(path);
    }
  }
}

const readFile = async <T>(path: string): Promise<T | undefined> => {
  const content = await readFileAsync(path, "utf8");
  const stat = await lstatAsync(path);

  if (path.endsWith(".json")) {
    const json = JSON.parse(content);
    return {
      ...json,
      year: stat.ctime.getUTCFullYear(),
    };
  } else if (path.endsWith(".mdx")) {
    const matterFile = matter(content);

    for (const [k, v] of Object.entries(matterFile.data)) {
      if (v instanceof Date) {
        matterFile.data[k] = v.toISOString();
      }
    }

    return {
      ...matterFile.data,
      body: matterFile.content,
      year: stat.ctime.getUTCFullYear(),
    } as unknown as T;
  }
};

export const fetchProjects = (): Promise<Project[]> =>
  readFiles<Project>("projects");

export const fetchPosts = (): Promise<Post[]> => readFiles<Post>("posts");

export const fetchPost = (year: string, slug: string): Promise<Post> =>
  readFile(join("content", "posts", basename(year), basename(slug) + ".mdx"));

export const listPosts = async (): Promise<Pick<Post, "year" & "slug">[]> => {
  const list: Pick<Post, "year" & "slug">[] = [];
  const root = join("content", "posts");

  for (const year of await readdirAsync(root)) {
    for (const file of await readdirAsync(join(root, year))) {
      if (file.endsWith(".mdx")) {
        list.push({
          // Remove .mdx suffix
          slug: file.substring(0, file.length - 4),
          year,
        });
      }
    }
  }

  return list;
};
