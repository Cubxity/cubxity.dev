import Link from "next/link";
import { FunctionComponent } from "react";

export interface IconButtonProps {
  icon: FunctionComponent<any>;
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const { icon: Icon, label, href, external, onClick } = props;

  if (href) {
    const a = (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="inline-block h-min w-min rounded-full p-2 transition-colors hover:bg-white/20"
        onClick={onClick}
        aria-label={label}
      >
        <Icon className="h-6 w-6 text-white" />
      </a>
    );

    if (external) {
      return a;
    } else {
      return (
        <Link href={href} passHref>
          {a}
        </Link>
      );
    }
  }

  return (
    <button
      className="h-min w-min rounded-full p-2 transition-colors hover:bg-white/20"
      onClick={onClick}
      aria-label={label}
    >
      <Icon className="h-6 w-6 text-white" />
    </button>
  );
}
