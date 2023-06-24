import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import HeroBgImage from "../../assets/image/hero-bg.png";

import ScrollArrow from "./components/layout/ScrollArrow";
import Socials from "./components/layout/Socials";

import ClientCard from "@/app/components/cms/project/ClientCard";
import ProjectCard from "@/app/components/cms/project/ProjectCard";
import Link from "@/app/components/input/Link";
import { getClients, getProjects } from "@/lib/gql";

const Page = async () => {
  const projects = await getProjects();
  const clients = await getClients();

  return (
    <>
      <div className="relative flex h-screen max-h-[80rem] min-h-[40rem] flex-col items-center justify-center">
        <header className="w-full max-w-screen-xl px-4">
          <div className="max-w-screen-md">
            <p className="text-xl font-medium text-gray-300 mb-2">
              👋 Hey, I&apos;m Cubxity
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-relaxed sm:leading-relaxed md:leading-relaxed mb-4">
              Full-stack developer with{" "}
              <span className="relative inline-block">
                6+ years
                <div className="-z-10 absolute left-0 right-0 bottom-2 h-1 md:h-2 bg-rose-600 rounded-full" />
              </span>{" "}
              of experience.
            </h1>
            <Socials />
          </div>
          <Image
            src={HeroBgImage}
            alt=""
            className="absolute -z-50 object-cover select-none"
            fill
            priority
          />
          {/*<HeroBgImage className="invisible absolute right-0 top-0 bottom-0 h-full lg:visible" />*/}
        </header>
        <div className="bg-gradient-to-b from-background/0 to-background absolute left-0 right-0 bottom-0 h-16" />
        <ScrollArrow />
      </div>
      <main className="scroll-my-20">
        <section id="projects" className="max-w-screen-xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <p className="text-gray-200 mb-6">Some of my recent projects.</p>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {projects.data.projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
          <Link
            href="https://github.com/Cubxity"
            target="_blank"
            className="text-gray-400"
          >
            More...
          </Link>
        </section>
        <section id="projects" className="max-w-screen-xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-2">Clients</h2>
          <p className="text-gray-200 mb-6">
            Some of the recent clients I&apos;ve worked with.
          </p>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {clients.data.clients.map((client) => (
              <ClientCard client={client} key={client.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const metadata: Metadata = {
  title: "Home | Cubxity - Full-stack Developer",
  description:
    "Hey, I'm Cubxity. I'm a Full-stack Developer and System Administrator with 6+ years of experience.",
  keywords: [
    "cubxity",
    "full-stack",
    "developer",
    "minecraft",
    "sysadmin",
    "portfolio",
    "resume",
  ],
};

export default Page;
