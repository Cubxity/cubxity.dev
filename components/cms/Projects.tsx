import { Project } from "../../src/cms/types";

import ProjectCard from "./ProjectCard";

export interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="flex snap-x snap-proximity gap-6 overflow-x-auto pb-2 pt-8 sm:grid sm:flex-none sm:overflow-x-visible sm:px-4 sm:pb-0 md:grid-cols-2 md:pt-12 xl:grid-cols-4">
      {projects.map((project, i) => (
        <li key={i} className="first:ml-4 last:mr-4 sm:first:ml-0 sm:last:mr-0">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
