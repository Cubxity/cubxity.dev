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
        className="p-2 w-min h-min rounded-full transition-colors hover:bg-white/20 inline-block"
        onClick={onClick}
        aria-label={label}
      >
        <Icon className="text-white w-6 h-6" />
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
      className="p-2 w-min h-min rounded-full transition-colors hover:bg-white/20"
      onClick={onClick}
      aria-label={label}
    >
      <Icon className="text-white w-6 h-6" />
    </button>
  );
}
