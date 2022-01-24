import { ReactNode } from "react";

export interface PreviewContainerProps {
  children: ReactNode;
}

export default function PreviewContainer({ children }: PreviewContainerProps) {
  return (
    <div className="preview-bg-grid inset-0 min-h-screen bg-background p-8">
      {children}
    </div>
  );
}
