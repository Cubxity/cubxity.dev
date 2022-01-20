import Image from "next/image";

import ExternalLinkIcon from "../../assets/svg/logo/hero-external-link.svg";
import { Project, ProjectTag } from "../../src/cms/types";

interface ProjectTagProps {
  tag: ProjectTag;
}

const ProjectTag = ({ tag }: ProjectTagProps) => {
  return (
    <span className="text-xs text-neutral-400 font-bold uppercase">#{tag}</span>
  );
};

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-80 sm:w-auto bg-neutral-800 overflow-clip rounded-lg sm:hover:scale-[102%] transition-transform snap-center h-full">
      <div className="aspect-video bg-black relative">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt=""
            layout="fill"
            className="object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <ul className="pb-3 flex gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <ProjectTag tag={tag} />
            </li>
          ))}
        </ul>
        <h3 className="text-white font-bold pb-2">{project.title}</h3>
        <span className="text-neutral-300">{project.description}</span>
        {project.links.length > 0 && (
          <a
            className="block text-indigo-400 font-medium mt-2"
            href={project.links[0].url}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLinkIcon className="text-indigo-400 w-4 h-4 inline mr-2 align-middle" />
            {project.links[0].label}
          </a>
        )}
      </div>
    </div>
  );
}
