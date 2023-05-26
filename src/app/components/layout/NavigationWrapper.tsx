"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

export interface NavigationWrapperProps {
  className?: string;
  children: ReactNode;
}

const NavigationWrapper = ({ className, children }: NavigationWrapperProps) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(className, scroll && "bg-background shadow-2xl")}>
      {children}
    </nav>
  );
};

export default NavigationWrapper;
