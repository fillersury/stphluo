import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WorkShowcase from "../components/WorkShowcase";

import stateFarm from "../assets/stateFarm.avif";
import gap from "../assets/gap.avif";
import geico from "../assets/geico.avif";
import cokeHonestTea from "../assets/cokeHonestTea.avif";
import obsidian from "../assets/obsidian.avif";
import myeyedr from "../assets/myeyedr.avif";
import casestudies from "../assets/casestudies.avif";

function Portfolio() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-stone-100">
        <div className="grid grid-cols-1 gap-4">
          <div className="p-10 sm:p-20">
            <h1 className="text-xl sm:text-6xl font-sans text-gray-600 font-semibold mb-4 text-center">
              Hi! I'm Stephanie.
            </h1>
            <p className="text-base sm:text-xl font-sans text-gray-600 font-light text-center">
              Product designer, UI/UX and design systems expert based out of New York City
            </p>
          </div>
        </div>
      </section>
      <section>
        <WorkShowcase
          image={stateFarm}
          category="Mobile UI, Design Systems"
          title="State Farm"
          description="Created mobile experiences for SFMA (State Farm Mobile App) claims, billing and payments, documents center, and built components for the mobile design system."
          onButtonClick={() => navigate("/projects/state-farm")}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={gap}
          category="Design Systems, Internal-facing UI, User Research"
          title="Gap Inc"
          description="Created and maintained the Gap Inc Design System, and designed internal franchise modules for Gap order management and fulfillment."
          onButtonClick={() => window.location.href = "/projects/gap"}
        />
      </section>
      <section>
        <WorkShowcase
          image={geico}
          category="Design Systems, Web and Mobile UI/UX"
          title="GEICO"
          description="Ensured the cohesiveness of the GEICO design system delivery process. Designed internal applications to support top priority insurance initiatives to stay competitive in the industry."
          onButtonClick={() => window.location.href = "/projects/geico"}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={cokeHonestTea}
          category="UX Research"
          title="Coca-Cola, Honest Tea"
          description="Conducted user experience (UX) research and strategizing for the Honest Tea division of Coca-Cola. I designed moderated usability studies and created testing prototypes."
          onButtonClick={() => window.location.href = "/state-farm-case-study"}
        />
      </section>
      <section>
        <WorkShowcase
          image={obsidian}
          category="Mobile and Web UI, Design Systems"
          title="Obsidian Global"
          description="Designed and built new user-facing pages by creating UI/UX wireframes, and utilizing HTML, CSS and Javascript on the front-end to customize web pages."
          onButtonClick={() => window.location.href = "/projects/obsidian"}
        />
      </section>
      <section className="bg-stone-100">
        <WorkShowcase
          image={myeyedr}
          category="UX Research"
          title="MyEyedr"
          description="As a UX researcher, I conducted thorough UX research proposals on customer experience. I hosted UX workshops, and conducted research presentations."
          onButtonClick={() => window.location.href = "/projects/myeyedr"}
        />
      </section>
      <section>
        <WorkShowcase
          image={casestudies}
          category="UI/UX Design"
          title="Case Studies"
          description="Showcasing my passion for user experience design in independent projects has allowed me to further my learning in the field of UI/UX. This compilation of projects include contracting to small-businesses in my community, as well as personal case studies."
          onButtonClick={() => window.location.href = "/state-farm-case-study"}
        />
      </section>
    </div>
  );
}

export default Portfolio;