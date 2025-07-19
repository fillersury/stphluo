// src/components/Contact.tsx
import React from "react";
import resumePdf from "../assets/resume.pdf";

function Resume() {

  return (
    <section className="bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 border-b-2">
          <div className="col-span-2 flex items-end my-5">
            <h1 className="text-4xl font-semibold text-stone-600">Resume</h1>
          </div>
          <div className="col-span-3 flex items-end justify-end h-full">
            <div className="flex flex-col items-end">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300 px-12 py-2 rounded-xl inline-block text-center"
              >
                Download pdf
              </a>
              <a
                href="https://www.linkedin.com/in/stephanie-l-43966b135/" // replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-stone-700 underline"
              >
                <i>or connect with me on LinkedIn</i>
              </a>
            </div>
          </div>
          <div className="col-span-5 my-5">
            <h2 className="text-2xl font-semibold text-stone-600">Design + Work Experience</h2>
          </div>
          <div className="col-span-2 my-5">
            <p className="text-base font-semibold text-stone-600">
              Senior UI/UX Designer<br/>
              State Farm - Synergis, Remote<br/>
              Jan 2024 - Present
            </p>
          </div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              Created mobile experiences for SFMA (State Farm Mobile App), built components, and created custom illustrations for use in the SFMA mobile design system. Reimagined the claims chatbot experience and conducted enterprise research tests on designs to back up design decisions with stakeholders.
            </p>
          </div>
          <div className="col-span-2 my-5">
            <p className="text-base font-semibold text-stone-600">
              Senior Product Designer<br/>
              GEICO, Remote<br/>
              Jan 2022- Dec 2023
            </p>
          </div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              <i>Design system</i>: Established a new enterprise design system and created and maintained components and documentation for all GEICO experiences. Hosted design review board and UI huddles as a senior team member to help review and critique designs brought by associate designers, to correct component implementation and user experience.
            </p>
          </div>
          <div className="col-span-2 my-5"></div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              <i>Internal application</i>: Created a new internal system involved in rating and underwriting that allows GEICO to be nimble at adjusting rates.
            </p>
          </div>
          <div className="col-span-2 my-5"></div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              <i>Customer-facing application</i>: Designed a new agent facing portal to allow external insurance vendors to sell GEICO products. Developed prototypes to support user experience testing, and meticulously crafted design testing plans for conducting moderated user interviews.
            </p>
          </div>
          <div className="col-span-2 my-5">
            <p className="text-base font-semibold text-stone-600">
              UI/UX Designer<br/>
              GAP Inc - Obsidian Global, Remote<br/>
              Nov 2019 - Jun 2021
            </p>
          </div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              Created wireframes for native desktop applications servicing internal-facing users, merchants, and GAP partners to facilitate merchandise sales, order management and fulfillment. Developed the design system for internal use, and pioneered best practices with business and development partners for consistency throughout all internal applications.
            </p>
          </div>
          <div className="col-span-2 my-5">
            <p className="text-base font-semibold text-stone-600">
              UX Researcher<br/>
              Coca-Cola - JBC Connect, Bethesda MD<br/>
              Mar 2019 - Nov 2019
            </p>
          </div>
          <div className="col-span-3 my-5">
            <p className="text-base text-stone-600">
              Conducted user experience (UX) research and implemented strategic initiatives, instrumental in generating valuable insights aimed at connecting with the core consumer of Honest Tea. Formulated user personas and designed well-structured moderated interview plans to assess and enhance the overall user experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 border-b-2">
          <div className="col-span-5 my-5">
            <h2 className="text-2xl font-semibold text-stone-600">Design Tools + Skills</h2>
          </div>
          <div className="col-span-2 my-5">
            <h3 className="text-lg font-semibold italic text-stone-600">Tools</h3>
            <p className="text-base text-stone-600">
              Figma<br/>
              Figjam<br/>
              Mural<br/>
              Jira, Gitlab<br/>
              UserTesting<br/>
              Axure RP<br/>
              XD<br/>
              Indesign<br/>
              Illustrator<br/>
              Photoshop<br/>
              After Effects, Premiere<br/>
              Google Analytics
            </p>
          </div>
          <div className="col-span-3 my-5">
            <h3 className="text-lg font-semibold italic text-stone-600">Design skills</h3>
            <p className="text-base text-stone-600">
              Creating + maintaining design systems<br/>
              Accessibility: Web Content Accessibility Guidelines (WCAG), World Wide Web Consortium (W3G)<br/>
              Typography + Color<br/>
              Mobile UI<br/>
              Web UI<br/>
              ios and Android design<br/>
              Usability testing<br/>
              Rapid prototypeing<br/>
              Interface design<br/>
              Information architecture
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="col-span-5 my-5">
            <h2 className="text-2xl font-semibold text-stone-600">Education and Certifications</h2>
          </div>
          <div className="col-span-2 my-5">
            <p className="text-base text-stone-600">
              UX Certified - LI Learning 2023<br/>
              CX Certified - LI Learning 2023<br/>
              Software Programming Fundamentals<br/>
              (HTML, CSS, JS) - LI Learning 2024
            </p>
          </div>
          <div className="col-span-3 my-5">
            <h3 className="text-lg text-stone-600">Bachelor of Science, Industrial Design + Human Computer Interaction</h3>
            <p className="text-base text-stone-600">
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