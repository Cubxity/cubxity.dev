import type { ClientPreview } from "@/lib/cms/types";

export const formatClientRange = ({ startYear, endYear }: ClientPreview) => {
  if (!startYear) return "";

  let buf = `${startYear}`;
  if (endYear && endYear !== startYear) {
    buf += ` - ${endYear}`;
  } else if (!endYear) {
    buf += " - Present";
  }
  return buf;
};
