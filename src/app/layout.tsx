import "../styles/globals.css";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

import Navigation from "@/app/components/layout/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Layout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
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
  metadataBase:
    process.env.METADATA_BASE_URL && new URL(process.env.METADATA_BASE_URL),
};
