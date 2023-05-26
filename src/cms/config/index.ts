import { CMS, CmsConfig } from "netlify-cms-core";

import PostPreview from "../../app/components/cms/preview/PostPreview";
import ProjectPreview from "../../app/components/cms/preview/ProjectPreview";

import { projects, posts } from "./collections";

const config: CmsConfig = {
  backend: {
    name: "github",
    repo: "cubxity/cubxity.dev.next",
    branch: "main",
    commit_messages: {
      create: "cms: create {{collection}} ({{slug}})",
      update: "cms: update {{collection}} ({{slug}})",
      delete: "cms: delete {{collection}} ({{slug}})",
      uploadMedia: "cms: upload {{path}}",
      deleteMedia: "cms: upload {{path}}",
    },
  },
  load_config_file: false,
  local_backend: true,
  media_folder: "/public/content/media/",
  public_folder: "/content/media/",
  collections: [projects, posts],
};

export const initCMS = async (cms: CMS) => {
  cms.init({ config });

  cms.registerPreviewStyle("/admin/main.css");
  cms.registerPreviewStyle("/admin/preview.css");
  cms.registerPreviewTemplate("projects", ProjectPreview);
  cms.registerPreviewTemplate("posts", PostPreview);
};
