import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { Project } from "../../../src/cms/types";
import ProjectCard from "../ProjectCard";

import PreviewContainer from "./PreviewContainer";

export default function ProjectPreview({
  entry,
}: PreviewTemplateComponentProps) {
  const project: Project = {
    slug: entry.getIn(["data", "slug"]),
    title: entry.getIn(["data", "title"]),
    description: entry.getIn(["data", "description"]),
    tags: entry.getIn(["data", "tags"], []),
    date: entry.getIn(["data", "date"]),
    featured: entry.getIn(["data", "tags"], false),
    thumbnail: entry.getIn(["data", "thumbnail"]),
  };

  return (
    <PreviewContainer>
      <div className="w-80">
        <ProjectCard project={project} />
      </div>
    </PreviewContainer>
  );
}
