import { GetStaticProps } from "next";
import React from "react";

import BackgroundImage from "../assets/svg/background.svg";
import SEO from "../components/SEO";
import Projects from "../components/cms/Projects";
import ScrollArrow from "../components/layout/ScrollArrow";
import SectionHeader from "../components/layout/SectionHeader";
import Socials from "../components/layout/Socials";
import ProcessSection from "../components/layout/section/ProcessSection";
import { fetchProjects } from "../src/cms/content.server";
import { Project } from "../src/cms/types";

export interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <SEO
        title="Home"
        description="Hey, I'm Cubxity. I'm a Full-stack Developer and System Administrator with 5+ years of experience. This is my portfolio, check it out!"
        keywords={[
          "cubxity",
          "full-stack",
          "developer",
          "minecraft",
          "sysadmin",
          "portfolio",
          "resume",
        ]}
      />
      <div className="h-screen min-h-[40rem] max-h-[80rem] bg-gradient-to-bl from-gray-900 to-black flex flex-col relative">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <span className="text-2xl text-gray-300 font-medium">
              Hey, I&apos;m
            </span>
            <h1 className="text-7xl md:text-8xl text-white font-medium py-8">
              Cubxity
            </h1>
            <span className="text-xl md:text-2xl text-gray-400 leading-relaxed md:leading-relaxed">
              Full-stack developer with 5+ years of experience. System
              administrator and DevOps engineer.
            </span>
            <Socials />
          </div>
          <BackgroundImage className="invisible lg:visible absolute right-0 top-0 bottom-0 h-full" />
        </header>
        <ScrollArrow />
      </div>
      <main className="scroll-my-20">
        <section id="clients" className="py-8 md:py-12 scroll-my-20">
          <div className="container px-4 m-auto">
            <SectionHeader
              title="Featured Projects"
              subtitle="A mix of personal and commissioned projects."
            />
            <Projects projects={projects} />
          </div>
        </section>
        <section id="process" className="py-8 md:py-12 scroll-my-20">
          <ProcessSection />
        </section>
        <div className="h-20" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjects().then((projects) =>
    projects.filter((project) => project.featured)
  );

  return {
    props: { projects },
  };
};
