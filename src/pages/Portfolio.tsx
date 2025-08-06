import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedText } from "../hooks/useTypedText";

import WorkShowcase from "../components/WorkShowcase";

import stateFarm from "../assets/stateFarm.avif";
import gap from "../assets/gap.avif";
import geico from "../assets/geico.avif";
import cokeHonestTea from "../assets/cokeHonestTea.avif";
import obsidian from "../assets/obsidian.avif";
import myeyedr from "../assets/myeyedr.avif";
import casestudies from "../assets/casestudies.avif";

interface PortfolioProps {
  onNavigate: (path: string) => void;
}

function Portfolio({ onNavigate }: PortfolioProps) {
  const typed = useTypedText(["a product", "an app", "a web", "an industrial"], 150, 1000);

  return (
    <div>
      <section className="bg-stone-100">
        <div className="grid grid-cols-1 gap-4">
          <div className="p-16 sm:p-20">
            <h1 className="text-xl sm:text-6xl font-sans text-gray-600 font-semibold mb-4 text-center">
              Hi! I'm Stephanie,<br /> and I'm{" "}
              <span className="text-red-300 ">{typed}</span><span className="inline-block w-[1px] h-5 text-red-300 animate-blink">|</span>{" "}<span className="text-red-300">designer.</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <WorkShowcase
          image={stateFarm}
          category="Mobile UI, Design Systems"
          title="State Farm"
          description="Created mobile experiences for SFMA (State Farm Mobile App) claims, billing and payments, documents center, and built components for the mobile design system."
          onButtonClick={() => onNavigate("projects/state-farm")}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={gap}
          category="Design Systems, Internal-facing UI, User Research"
          title="Gap Inc"
          description="Created and maintained the Gap Inc Design System, and designed internal franchise modules for Gap order management and fulfillment."
          onButtonClick={() => onNavigate("projects/gap")}
        />
      </section>
      <section>
        <WorkShowcase
          image={geico}
          category="Design Systems, Web and Mobile UI/UX"
          title="GEICO"
          description="Ensured the cohesiveness of the GEICO design system delivery process. Designed internal applications to support top priority insurance initiatives to stay competitive in the industry."
          onButtonClick={() => onNavigate("projects/geico")}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={cokeHonestTea}
          category="UX Research"
          title="Coca-Cola, Honest Tea"
          description="Conducted user experience (UX) research and strategizing for the Honest Tea division of Coca-Cola. I designed moderated usability studies and created testing prototypes."
          onButtonClick={() => onNavigate("projects/coke-honest-tea")}
        />
      </section>
      <section>
        <WorkShowcase
          image={obsidian}
          category="Mobile and Web UI, Design Systems"
          title="Obsidian Global"
          description="Designed and built new user-facing pages by creating UI/UX wireframes, and utilizing HTML, CSS and Javascript on the front-end to customize web pages."
          onButtonClick={() => onNavigate("projects/obsidian")}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={myeyedr}
          category="UX Research"
          title="MyEyeDr"
          description="As a UX researcher, I conducted thorough UX research proposals on customer experience. I hosted UX workshops, and conducted research presentations."
          onButtonClick={() => onNavigate("projects/myeyedr")}
        />
      </section>
      <section>
        <WorkShowcase
          image={casestudies}
          category="UI/UX Design"
          title="Case Studies"
          description="Showcasing my passion for user experience design in independent projects has allowed me to further my learning in the field of UI/UX. This compilation of projects include contracting to small-businesses in my community, as well as personal case studies."
          onButtonClick={() => onNavigate("case-studies")}
        />
      </section>
    </div>
  );
}

export default Portfolio;