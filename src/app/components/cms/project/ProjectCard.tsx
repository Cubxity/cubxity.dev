import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { Project } from "@/lib/cms";

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link
    className="p-6 border border-gray-700 hover:bg-fuchsia-900/10 hover:scale-[102%] transition-all rounded-lg"
    href={project.url ?? `#`}
    role="button"
    target="_blank"
    rel="noreferrer"
  >
    <h3 className="font-semibold mb-2">
      {project.title} <ArrowUpRightIcon className="inline-block w-4 h-4" />
    </h3>
    <p className="text-gray-200">{project.description}</p>
  </Link>
);

export default ProjectCard;
