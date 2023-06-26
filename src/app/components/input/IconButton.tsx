import Link from "next/link";
import { FunctionComponent } from "react";

export interface IconButtonProps {
  icon: FunctionComponent<any>;
  label: string;
  href: string;
}

export default function IconButton(props: IconButtonProps) {
  const { icon: Icon, label, href } = props;

  return (
    <Link
      href={href}
      rel="noreferrer"
      target="_blank"
      className="inline-block h-min w-min rounded-full p-2 transition-colors hover:bg-white/20"
      aria-label={label}
    >
      <Icon className="h-6 w-6 text-white" />
    </Link>
  );
}
