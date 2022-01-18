import clsx from "clsx";
import { useMemo } from "react";

import { ProjectTag } from "../../src/cms/types";

interface ProjectTagProps {
  tag: ProjectTag;
}

const ProjectTag = ({ tag }: ProjectTagProps) => {
  const colorStyle = useMemo(() => {
    switch (tag) {
      case "full-stack":
        return "bg-teal-400/20";
      case "web":
        return "bg-indigo-400/20";
      case "backend":
        return "bg-blue-400/20";
      case "minecraft":
        return "bg-green-400/20";
      case "devops":
        return "bg-yellow-400/20";
      case "sysadmin":
        return "bg-red-400/20";
    }
  }, [tag]);

  return (
    <div
      className={clsx(
        "px-4 py-1 text-white text-xs font-bold rounded-full w-min uppercase",
        colorStyle
      )}
    >
      {tag}
    </div>
  );
};

export default function ProjectCard() {
  return (
    <div className="w-80 sm:w-auto bg-neutral-800 overflow-clip rounded-lg hover:scale-105 transition-transform snap-center">
      <div className="aspect-video bg-black" />
      <div className="p-4">
        <ul className="pb-4 flex gap-2">
          <li>
            <ProjectTag tag="web" />
          </li>
          <li>
            <ProjectTag tag="devops" />
          </li>
        </ul>
        <h3 className="text-white font-bold pb-2">A Project</h3>
        <span className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vulputate ante magna, vitae consequat odio vehicula vel.
        </span>
        <span className="text-neutral-500 block mt-4">January 2022</span>
      </div>
    </div>
  );
}
