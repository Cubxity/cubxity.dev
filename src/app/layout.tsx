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
  applicationName: "Test",
  title: {
    default: "Cubxity",
    template: "%s | Cubxity — Full-stack Developer",
  },
  openGraph: {
    siteName: "Cubxity — Full-stack Developer",
    images: ["/assets/logo/256x.png"],
  },
  icons: "/assets/logo/128x-circle.png",
};
