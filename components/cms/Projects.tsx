import { Project } from "../../src/cms/types";

import ProjectCard from "./ProjectCard";

export interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="flex overflow-x-auto sm:overflow-x-visible snap-proximity snap-x pb-2 sm:pb-0 sm:flex-none sm:grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8 md:pt-12">
      {projects.map((project, i) => (
        <li key={i}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
