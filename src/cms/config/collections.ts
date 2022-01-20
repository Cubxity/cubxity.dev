import { CmsCollection } from "netlify-cms-core";

export const projects: CmsCollection = {
  name: "projects",
  label: "Projects",
  label_singular: "Project",
  folder: "content/projects",
  create: true,
  format: "json",
  sortable_fields: ["date"],
  slug: "{{slug}}",
  fields: [
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: true,
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Description",
      name: "description",
      widget: "string",
      required: true,
    },
    {
      label: "Tags",
      name: "tags",
      widget: "list",
      allow_add: true,
      required: true,
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      widget: "image",
      required: true,
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      required: true,
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
          required: true,
        },
        {
          label: "URL",
          name: "url",
          widget: "string",
          required: true,
        },
      ],
    },
    {
      label: "Featured?",
      name: "featured",
      widget: "boolean",
      required: true,
    },
  ],
};
