import React from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header>
      <h2 className="py-4 text-3xl font-extrabold text-white">{title}</h2>
      <span className="text-xl text-gray-400">{subtitle}</span>
    </header>
  );
}
