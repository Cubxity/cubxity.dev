import Image from "next/image";

import ExternalLinkIcon from "../../assets/svg/logo/hero-external-link.svg";
import { Project } from "../../src/cms/types";

interface ProjectTagProps {
  tag: string;
}

const ProjectTag = ({ tag }: ProjectTagProps) => {
  return (
    <span className="text-xs font-bold uppercase text-neutral-400">#{tag}</span>
  );
};

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full w-80 snap-center flex-col overflow-clip rounded-lg bg-neutral-800 transition-transform sm:w-auto sm:hover:scale-[102%]">
      <div className="relative aspect-video bg-black">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt=""
            layout="fill"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex grow flex-col p-4">
        <ul className="flex gap-2 pb-3">
          {project.tags?.map((tag) => (
            <li key={tag}>
              <ProjectTag tag={tag} />
            </li>
          ))}
        </ul>
        <h3 className="pb-2 font-bold text-white">{project.title}</h3>
        <span className="grow text-neutral-300">{project.description}</span>
        {project.links?.length > 0 && (
          <a
            className="mt-2 block font-medium text-indigo-400"
            href={project.links[0].url}
            rel="noreferrer"
            target={project.links[0].url.startsWith("/") ? undefined : "_blank"}
          >
            <ExternalLinkIcon className="mr-2 inline h-4 w-4 align-middle text-indigo-400" />
            {project.links[0].label}
          </a>
        )}
      </div>
    </div>
  );
}
