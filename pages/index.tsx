import React from "react";
import BackgroundImage from "../assets/svg/background.svg";
import Card from "../components/data/Card";
import Navigation from "../components/layout/Navigation";

export default function Index() {
  return (
    <div className="bg-background">
      <div className="h-screen bg-gradient-to-bl from-gray-900 to-black flex flex-col min-h-fit">
        <Navigation/>
        <div className="container m-auto px-4">
          <div className="lg:w-1/2">
            <span className="text-2xl text-gray-300 font-medium">
              Hey I'm
            </span>
            <h1 className="text-8xl text-white font-medium py-8">
              Cubxity
            </h1>
            <span className="text-xl md:text-2xl text-gray-400 leading-relaxed md:leading-relaxed">
              Full-stack developer with 5+ years of experience. System administrator and DevOps engineer.
            </span>
          </div>
          <BackgroundImage className="invisible lg:visible absolute right-0 top-0 bottom-0 h-full"/>
        </div>
        <div className="h-24 w-full bg-gradient-to-t from-background to-transparent z-10"/>
      </div>
    </div>
  );
}