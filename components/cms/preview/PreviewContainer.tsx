import { ReactNode } from "react";

export interface PreviewContainerProps {
  children: ReactNode;
}

export default function PreviewContainer({ children }: PreviewContainerProps) {
  return (
    <div className="inset-0 bg-background p-8 min-h-screen preview-bg-grid">
      {children}
    </div>
  );
}
