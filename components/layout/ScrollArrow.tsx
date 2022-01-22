import { MouseEvent } from "react";

import ChevronIcon from "../../assets/svg/logo/hero-chevron.svg";

export default function ScrollArrow() {
  const handleScroll = (e: MouseEvent) => {
    e.preventDefault();
    
    const main = document.getElementsByTagName("main")[0];
    main.scrollIntoView();
  };

  return (
    <div className="flex justify-center absolute bottom-0 left-0 right-0 mb-20 sm:mb-6">
      <a
        role="button"
        className="animate-bounce"
        aria-label="scroll down"
        href="#projects"
        onClick={handleScroll}
      >
        <ChevronIcon className="text-gray-200 w-6 h-6" />
      </a>
    </div>
  );
}
