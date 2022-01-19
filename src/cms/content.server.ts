import * as fs from "fs";
import { join } from "path";
import { Project } from "./types";

const { promisify } = require("util");

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

export const readFiles = async <T>(kind: string): Promise<T[]> => {
  const root = join("content", kind);
  const list = [];

  const files = await readdirAsync(root);
  for (const file of files) {
    // TODO: Handle markdown
    if (file.endsWith(".json")) {
      const data = await readFile(kind, file);
      if (data) {
        list.push(data);
      }
    } else {
      console.warn(`[content] unrecognized file: ${file}, skipping...`);
    }
  }

  return list;
};

export const readFile = async <T>(
  kind: string,
  path: string
): Promise<T | undefined> => {
  const file = join("content", kind, path);
  const content = await readFileAsync(file, "utf8");

  // TODO: Handle markdown
  if (file.endsWith(".json")) {
    return JSON.parse(content);
  }
};

export const fetchProjects: () => Promise<Project[]> = async () =>
  readFiles<Project>("projects");
