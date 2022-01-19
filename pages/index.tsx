import React from "react";

import BackgroundImage from "../assets/svg/background.svg";
import SEO from "../components/SEO";
import Projects from "../components/cms/Projects";
import Card from "../components/data/Card";
import Navigation from "../components/layout/Navigation";
import ScrollArrow from "../components/layout/ScrollArrow";
import SectionHeader from "../components/layout/SectionHeader";
import Socials from "../components/layout/Socials";

export default function Index() {
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
        <Navigation />
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
      <main>
        <section id="clients" className="py-8 md:py-12">
          <div className="container px-4 m-auto">
            <SectionHeader
              title="Featured Projects"
              subtitle="A mix of personal and commissioned projects."
            />
            <Projects />
          </div>
        </section>
        <section id="process" className="py-8 md:py-12">
          <div className="container px-4 m-auto">
            <SectionHeader
              title="Fulfilling The Process"
              subtitle="Software development, from start to finish."
            />
            <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6 pt-8 md:pt-12">
              <Card
                title="Design & Prototype"
                subtitle="From UX design to system architecture design, ensuring a silky smooth user experience."
              />
              <Card
                title="Full-stack development"
                subtitle="From RESTful APIs to a friendly user interface, with scalability in mind."
              />
              <Card
                title="Deployment"
                subtitle="Managing deployments using Docker and Kubernetes on a Linux server."
              />
              <Card
                title="System administration"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius interdum eros."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
