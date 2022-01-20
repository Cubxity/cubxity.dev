import clsx from "clsx";
import React, { FunctionComponent, useState } from "react";

import CSS3Logo from "../../../assets/svg/logo/fa-css3.svg";
import DockerLogo from "../../../assets/svg/logo/fa-docker.svg";
import GitLogo from "../../../assets/svg/logo/fa-git.svg";
import GitHubLogo from "../../../assets/svg/logo/fa-github.svg";
import GitLabLogo from "../../../assets/svg/logo/fa-gitlab.svg";
import GoLogo from "../../../assets/svg/logo/fa-golang.svg";
import HTML5Logo from "../../../assets/svg/logo/fa-html5.svg";
import JavaLogo from "../../../assets/svg/logo/fa-java.svg";
import LinuxLogo from "../../../assets/svg/logo/fa-linux.svg";
import NodeJSLogo from "../../../assets/svg/logo/fa-nodejs.svg";
import ReactLogo from "../../../assets/svg/logo/fa-react.svg";
import YarnLogo from "../../../assets/svg/logo/fa-yarn.svg";
import AdjustmentsIcon from "../../../assets/svg/logo/hero-adjustments.svg";
import CloudIcon from "../../../assets/svg/logo/hero-cloud.svg";
import DatabaseIcon from "../../../assets/svg/logo/hero-database.svg";
import GlobeIcon from "../../../assets/svg/logo/hero-globe.svg";
import GradleLogo from "../../../assets/svg/logo/logos-gradle.svg";
import GrafanaLogo from "../../../assets/svg/logo/logos-grafana.svg";
import IntelliJLogo from "../../../assets/svg/logo/logos-intellij.svg";
import KotlinLogo from "../../../assets/svg/logo/logos-kotlin.svg";
import KubernetesLogo from "../../../assets/svg/logo/logos-kubernetes.svg";
import MavenLogo from "../../../assets/svg/logo/logos-maven.svg";
import MinecraftLogo from "../../../assets/svg/logo/logos-minecraft.svg";
import NextJSLogo from "../../../assets/svg/logo/logos-nextjs.svg";
import PostgreSQLLogo from "../../../assets/svg/logo/logos-postgresql.svg";
import PrometheusLogo from "../../../assets/svg/logo/logos-prometheus.svg";
import TailwindCSSLogo from "../../../assets/svg/logo/logos-tailwindcss.svg";
import TypeScriptLogo from "../../../assets/svg/logo/logos-typescript.svg";
import SectionHeader from "../SectionHeader";

interface ProcessItemProps {
  icon: FunctionComponent<any>;
  label: string;
}

const ProcessItem = ({ icon: Icon, label }: ProcessItemProps) => {
  return (
    <div className="bg-neutral-800 rounded-lg p-6 sm:hover:scale-[102%]">
      <Icon className="text-white w-6 h-6 inline mr-6" />
      <span className="text-white font-bold">{label}</span>
    </div>
  );
};

interface TabProps {
  icon: FunctionComponent<any>;
  label: string;
  selected?: boolean;

  onSelect(): void;
}

const Tab = ({ icon: Icon, label, selected, onSelect }: TabProps) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center"
      onClick={onSelect}
    >
      <Icon
        className={clsx(
          "text-gray-400 w-12 h-12 mb-3 transition-colors ",
          selected && "text-indigo-400"
        )}
      />
      <span
        className={clsx(
          "text-sm text-gray-400 font-bold transition-colors",
          selected && "text-indigo-400"
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default function ProcessSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container px-4 m-auto">
      <SectionHeader
        title="Fulfilling The Process"
        subtitle="Software development, from start to finish."
      />
      <div className="flex flex-col">
        <div className="flex flex-row mt-12 gap-10 md:flex-1">
          <Tab
            icon={GlobeIcon}
            label="Frontend"
            selected={selectedTab === 0}
            onSelect={() => setSelectedTab(0)}
          />
          <Tab
            icon={DatabaseIcon}
            label="Backend"
            selected={selectedTab === 1}
            onSelect={() => setSelectedTab(1)}
          />
          <Tab
            icon={CloudIcon}
            label="DevOps"
            selected={selectedTab === 2}
            onSelect={() => setSelectedTab(2)}
          />
          <Tab
            icon={AdjustmentsIcon}
            label="Tools"
            selected={selectedTab === 3}
            onSelect={() => setSelectedTab(3)}
          />
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 md:flex-1 h-min">
          {selectedTab === 0 && (
            <>
              <ProcessItem icon={NextJSLogo} label="Next.js" />
              <ProcessItem icon={ReactLogo} label="React" />
              <ProcessItem icon={TailwindCSSLogo} label="TailwindCSS" />
              <ProcessItem icon={HTML5Logo} label="HTML" />
              <ProcessItem icon={CSS3Logo} label="CSS" />
              <ProcessItem icon={TypeScriptLogo} label="TypeScript" />
            </>
          )}
          {selectedTab === 1 && (
            <>
              <ProcessItem icon={KotlinLogo} label="Kotlin" />
              <ProcessItem icon={JavaLogo} label="Java" />
              <ProcessItem icon={NodeJSLogo} label="Node.js" />
              <ProcessItem icon={GoLogo} label="Go" />
              <ProcessItem icon={PostgreSQLLogo} label="PostgreSQL" />
              <ProcessItem icon={MinecraftLogo} label="Minecraft" />
            </>
          )}
          {selectedTab === 2 && (
            <>
              <ProcessItem icon={KubernetesLogo} label="Kubernetes" />
              <ProcessItem icon={DockerLogo} label="Docker" />
              <ProcessItem icon={GitHubLogo} label="GitHub Actions" />
              <ProcessItem icon={GitLabLogo} label="GitLab CI" />
              <ProcessItem icon={PrometheusLogo} label="Prometheus" />
              <ProcessItem icon={LinuxLogo} label="Linux" />
            </>
          )}
          {selectedTab === 3 && (
            <>
              <ProcessItem icon={GitLogo} label="Git" />
              <ProcessItem icon={IntelliJLogo} label="JetBrains IDE" />
              <ProcessItem icon={GradleLogo} label="Gradle" />
              <ProcessItem icon={MavenLogo} label="Maven" />
              <ProcessItem icon={YarnLogo} label="Yarn" />
              <ProcessItem icon={GrafanaLogo} label="Grafana" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
