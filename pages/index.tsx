import { GetStaticProps } from "next";
import React from "react";

import BackgroundImage from "../assets/svg/background.svg";
import Projects from "../components/cms/Projects";
import ScrollArrow from "../components/layout/ScrollArrow";
import SectionHeader from "../components/layout/section/SectionHeader";
import Socials from "../components/layout/Socials";
import ProcessSection from "../components/layout/section/ProcessSection";
import SEO from "../components/util/SEO";
import { fetchProjects } from "../src/cms/content.server";
import { Project } from "../src/cms/types";
import ContactSection from "../components/layout/section/ContactSection";

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
      <div className="relative flex h-screen max-h-[80rem] min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <header className="container m-auto px-4">
          <div className="lg:w-1/2">
            <span className="text-2xl font-medium text-gray-300">
              Hey, I&apos;m
            </span>
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              Cubxity
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              Full-stack developer with 5+ years of experience. System
              administrator and DevOps engineer.
            </span>
            <Socials />
          </div>
          <BackgroundImage className="invisible absolute right-0 top-0 bottom-0 h-full lg:visible" />
        </header>
        <ScrollArrow />
      </div>
      <main className="scroll-my-20">
        <section id="projects" className="scroll-my-20 py-8 md:py-12">
          <div className="container m-auto px-4">
            <SectionHeader
              title="Featured Projects"
              subtitle="A mix of personal and commissioned projects."
            />
            <Projects projects={projects} />
          </div>
        </section>
        <section id="process" className="scroll-my-20 py-8 md:py-12">
          <ProcessSection />
        </section>
        <div className="h-20" />
      </main>
      <ContactSection />
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
