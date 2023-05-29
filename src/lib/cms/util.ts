import { Client } from "@/lib/cms/types";

export const formatClientRange = ({ start, end }: Client) => {
  if (!start) return "";

  let buf = `${start}`;
  if (end && end !== start) {
    buf += ` - ${end}`;
  } else if (!end) {
    buf += " - Present";
  }
  return buf;
};
