import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <ul className="flex overflow-x-auto sm:overflow-x-visible snap-proximity snap-x pb-2 sm:pb-0 sm:flex-none sm:grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8 md:pt-12">
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
    </ul>
  );
}
