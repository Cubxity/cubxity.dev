import dynamic from "next/dynamic";
import Head from "next/head";

import { initCMS } from "../../cms/config";

const CMS = dynamic(
  async () => {
    const cms = await import("netlify-cms-app");

    // @ts-ignore
    initCMS(cms);

    return () => <></>; // eslint-disable-line react/display-name
  },
  {
    ssr: false,
  }
);

export default function AdminPage() {
  return (
    <>
      <Head>
        {/* Override Tailwind's color */}
        <style>
          {".bg-background {background-color: rgb(239, 240, 244) !important;}"}
        </style>
      </Head>
      <CMS />
    </>
  );
}
