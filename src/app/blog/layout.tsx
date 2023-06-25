import { Metadata } from "next";
import { FC, ReactNode } from "react";

const BlogLayout: FC = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default BlogLayout;

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Cubxity's Blog",
  },
};
