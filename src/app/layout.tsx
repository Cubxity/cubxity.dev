import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import "../styles/globals.css";
import { Metadata } from "next";
import React from "react";

import Navigation from "./components/layout/Navigation";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Cubxity",
    template: "%s | Cubxity - Full-stack Developer",
  },
};
