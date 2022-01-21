import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import "../styles/globals.css";
import { useRouter } from "next/router";
import React from "react";

import Navigation from "../components/layout/Navigation";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.route !== "/admin" && <Navigation />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
