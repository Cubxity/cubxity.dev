import Link from "next/link";
import { FunctionComponent } from "react";

export interface IconButtonProps {
  icon: FunctionComponent<any>;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const { icon: Icon, href, external, onClick } = props;

  const button = (
    <button
      type="button"
      className="p-2 w-min h-min rounded-full transition-colors hover:bg-white/20"
      onClick={onClick}
    >
      <Icon className="text-white w-6 h-6" />
    </button>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} rel="noreferrer" target="_blank">
          {button}
        </a>
      );
    } else {
      return (
        <Link href={href} passHref>
          {button}
        </Link>
      );
    }
  }

  return button;
}
