// src/components/Contact.tsx
import React from "react";
import resumePdf from "../assets/resume.pdf";

function Resume() {

  return (
    <section className="bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 border-b-2 gap-1 lg:gap-2">
          <div className="cols-span-1 sm:col-span-5 lg:col-span-3 flex items-center sm:items-end justify-center sm:justify-end h-full block lg:hidden">
            <div className="flex flex-col items-center sm:items-end">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm lg:text-base bg-red-300 hover:bg-red-200 px-4 sm:px-8 lg:px-12 py-2 rounded-xl inline-block text-center"
              >
                Download pdf
              </a>
              <a
                href="https://www.linkedin.com/in/stephanie-luo-43966b135" // replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs text-stone-700 underline"
              >
                <i>or connect with me on LinkedIn</i>
              </a>
            </div>
          </div>
          <div className="cols-span-1 sm:col-span-5 lg:col-span-2 flex items-end my-2 lg:my-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-stone-600">Resume</h1>
          </div>
          <div className="cols-span-1 sm:col-span-5 lg:col-span-3 lg:col-span-3 flex items-end justify-end h-full hidden lg:block">
            <div className="flex flex-col items-end">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300 hover:bg-red-200 px-12 py-2 rounded-xl inline-block text-center"
              >
                Download pdf
              </a>
              <a
                href="https://www.linkedin.com/in/stephanie-luo-43966b135" // replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-stone-700 underline"
              >
                <i>or connect with me on LinkedIn</i>
              </a>
            </div>
          </div>
          <div className="cols-span-1 sm:col-span-5 my-2 lg:my-4">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">Design Experience</h2>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base font-semibold text-stone-600">
              Senior Product Designer<br/>
              State Farm - Synergis, Remote<br/>
              Jan 2024 - Present
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <p className=" text-xs md:text-sm lg:text-base text-stone-600">
              Designed mobile experiences for the State Farm mobile app and claims, focusing on user-centered design and accessibility to meet user needs.
              Pitched and completed a State Farm claims experience redesign, to improve the user experience with filing claims.
              Created and maintained components for the State Farm AI chatbot design system, and the mobile design system.
              Completed a redesign for the mobile illustration library for visual consistency and clarity.
              Collaborated with stakeholders, product managers, researchers, and other designers to solve complex design problems.
              Mentored and onboarded new associate designers, and led peer review sessions to foster a collaborative team environment.
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base font-semibold text-stone-600">
              Senior Product Designer<br/>
              GEICO, Remote<br/>
              May 2022- Jan 2024
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              <i>Mobile and Web UI</i>: Created an intuitive experience portal for external insurance vendors to sell GEICO products, utilizing user-centered design strategies and a continuous feedback loop with users.
              Collaborated cross-functionally with business and engineering teams to create a new agent portal that allows insurance vendors to sell internal insurance products.
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4"></div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              <i>Design System</i>: Successfully established a new enterprise design system, and created components and documentation to standardize and improve consistency across all GEICO experiences, specifically in internal platforms, sales, and claims experiences.
              Ensured the scalability, adaptability, and enduring impact of the design system to enhance its value for the organization.
              Led design review board and UI huddles to ensure consistency across component implementation and user experience. 
              Collaborated with the front-end team to implement components and styles in weekly releases, ensuring fluid cross-functional collaboration.
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base font-semibold text-stone-600">
              Senior Product Designer<br/>
              GAP Inc - Obsidian Global, Washington D.C.<br/>
              Nov 2019 - May 2022
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              Designed intuitive user interfaces for existing and new franchise platforms : order management, fulfillment, assortment, and pricing, and enhanced the user experience.
              Collaborated with cross-functional teams, including product managers, developers, and other designers to create cohesive and effective design solutions that align with business objectives.
              Updated and maintained the Franchise design system, ensuring consistency across all digital platforms and adherence to brand guidelines.
              Created detailed design specifications and annotations for accurate implementation by development teams.
              Stayed current with industry trends + best practices, integrating concepts into ongoing projects.
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base font-semibold text-stone-600">
              UX Researcher<br/>
              The Coca-Cola Company - JBCField, Washington D.C.<br/>
              Mar 2019 - Nov 2019
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              Conducted user experience (UX ) research and implemented strategic initiatives, vital in generating valuable insights aimed at connecting with the core user
              Formulated user personas and designed well-structured moderated interview plans to assess and enhance the overall user experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 border-b-2">
          <div className="cols-span-1 sm:col-span-5 my-2 lg:my-4">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">Tools + Skills</h2>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <h3 className="text-base md:text-lg font-semibold italic text-stone-600">Tools</h3>
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              Figma<br/>
              Mural<br/>
              InVision<br/>
              Sketch<br/>
              Axure RP<br/>
              XD<br/>
              Indesign<br/>
              Illustrator<br/>
              Photoshop<br/>
              After Effects<br/>
              Premiere<br/>
              Google Analytics<br/>
              UserTesting<br/>
              Jira<br/>
              Gitlab
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <h3 className="text-base md:text-lg font-semibold italic text-stone-600">Design skills</h3>
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              Design Systems<br/>
              Web Content Accessibility(WCAG)<br/>
              World Wide Web Consortium(W3G)<br/>
              Typography + Color<br/>
              Mobile + Web UI<br/>
              iOS + Android<br/>
              Usability Testing<br/>
              User Research<br/>
              Rapid Prototyping<br/>
              Interface Design<br/>
              Information Architecture
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="cols-span-1 sm:col-span-5 my-2 lg:my-4">
            <h2 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">Education and Certifications</h2>
          </div>
          <div className="cols-span-1 sm:col-span-2 my-2 lg:my-4">
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              UX Certified LI Learning, 2023<br/>
              CX Certified LI Learning, 2023<br/>
              HTML, CSS, JS Certified LI Learning, 2023
            </p>
          </div>
          <div className="cols-span-1 sm:col-span-3 my-2 lg:my-4">
            <h3 className="text-xs md:text-sm lg:text-base text-stone-600">Bachelor of Science, Industrial Design + Human Computer Interaction</h3>
            <p className="text-xs md:text-sm lg:text-base text-stone-600">
              Virginia Tech (Virginia Polytechnic and State University)<br/>
              August 2015 - May 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;