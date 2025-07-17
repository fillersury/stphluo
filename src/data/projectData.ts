import stateFarm from "../assets/stateFarmLogo.svg";
import stateFarmDS from "../assets/stateFarmDS.avif";
import stateFarmBS from "../assets/stateFarmBS.avif";
import stateFarmComponents from "../assets/stateFarmComponents.avif";
import stateFarmConclusion from "../assets/stateFarmConclusion.avif";

import gapLogo from "../assets/gapLogo.avif";
import bananaRepublicLogo from "../assets/bananaRepublicLogo.avif";
import oldNavyLogo from "../assets/oldNavyLogo.avif";
import athletaLogo from "../assets/athletaLogo.avif";

import gapBS from "../assets/gapBS.avif";
import gapUR from "../assets/gapUR.avif";
import gapComponents from "../assets/gapComponents.avif";
import gapConclusion from "../assets/gapConclusion.avif";

import geicoLogo from "../assets/geicoLogo.svg";
import geicoUR from "../assets/geicoUR.avif";
import geicoUR2 from "../assets/geicoUR2.avif";
import geicoUR3 from "../assets/geicoUR3.avif";
import geicoBS from "../assets/geicoBS.avif";
import geicoComponents from "../assets/geicoComponents.gif";
import geicoComponents2 from "../assets/geicoComponents2.avif";

import obsidian from "../assets/obsidian.avif";
import obsidian2 from "../assets/obsidian2.avif";

import myeyedrLogo from "../assets/myeyedrLogo.avif";
import myeyedrUR from "../assets/myeyedrUR.avif";

export type SectionType = 
  | "simpleTitle"
  | "simpleFullSection"
  | "simpleLeftTextSection"
  | "simpleRightTextSection"
  | "conclusion"
  | "multipleLogosTitleSection"
  | "complexFullSection"
  | "complexSingleLogoTitleSection"
  | "simpleTextImageOverlaySection"
  | "multipleImageFullSection"
  | "complexLeftTextImageListSection"
  | "workShowcase";

export interface SectionData {
  type: SectionType;
  data: any;
}

export interface Project {
  sections: SectionData[];
}

const projectData: Record<string, Project> = {
  "state-farm": {
    sections: [
      {
        type: "simpleTitle",
        data: {
          title: "State Farm",
          title_bg_color: "bg-orange-50",
          textColor: "text-red-600",
          cardColor: "bg-white",
          image: stateFarm,
          timeline_dates: "Jun 2024 - Present",
          timeline_text:
            "All proofs of concept, prototypes and designs were created for use by State Farm.",
          role_text:
            "As a Senior UI Designer, I worked on SFMA (State Farm Mobile App), and built mobile components and experiences for claims and documents.",
          projects: [
            "State Farm Mobile App Native Design System",
            "SFMA Claims and Document Center",
          ],
          tools: ["Figma, Mural, Gitlab, Sharepoint"],
        },
      },
      {
        type: "simpleFullSection",
        data: {
          textColor: "text-red-600",
          subHeader: "Product, Native Mobile UI",
          header: "01 Native SFMA Mobile Design System",
          description:
            "I created and maintained native mobile components, and aimed to ensure a cohesive and consistent user experience across all sections of SFMA (State Farm Mobile Application), including insurance landing page, claims, document center, and FAQs. I used user-centric design principles, added, removed, updated and improved upon components, illustrations, and icons.",
          image: stateFarmDS,
        },
      },
      {
        type: "simpleLeftTextSection",
        data: {
          textColor: "text-red-600",
          header: "02 Claims Reimagined",
          paragraphs: [
            "As claims routing questions increased in our work for claims, we worked on a long-term solution that could replace our current 'automated' claims chatbot.",
            "Research: I started with competitive analysis of how other companies were handling their claims.",
          ],
          image: stateFarmBS,
        },
      },
      {
        type: "simpleRightTextSection",
        data: {
          textColor: "text-red-600",
          header: "Iterative Design Wireframing",
          paragraphs: [
            "The transformation from chatbot-based interactions to form-based submissions required careful planning, continuous refinement, and a deep understanding of the user's journey. The goal was to make the entire process intuitive, user-friendly, and efficient. Through the iterative design process, we ensured that both the visual design and functionality evolved progressively in alignment with user needs and business goals.",
          ],
          image: stateFarmComponents,
        },
      },
      {
        type: "simpleLeftTextSection",
        data: {
          textColor: "text-red-600",
          header: "04 Final Design + Prototype",
          paragraphs: [
            "The final claims experience was approved by business, after bringing the claims reimagined prototype to business presentations and finalizing business requirements.",
          ],
          image: stateFarmConclusion,
        },
      },
    ],
  },
  "gap": {
    sections: [
      {
        type: "multipleLogosTitleSection",
        data: {
          logos: [gapLogo, bananaRepublicLogo, oldNavyLogo, athletaLogo],
          title: "Gap",
          title_bg_color: "linear-gradient(90deg, #E3EEFF 2%, #FFEFD0 100%)",
          textColor: "text-blue-900",
          timeline_dates: "Jan 2024 - Jun 2024",
          timeline_text:
            "All proofs of concept, prototypes and designs were created for use by Gap Inc.",
          role_text:
            "As a Senior UI Designer, I worked on the Gap Franchise Design System, and designedInternal franchise web modules for internal users.",
          projects: [
            "Franchise Design System (Web UI)",
            "Franchise Internal Modules",
          ],
          tools: "Figma, Figjam, Mural, Jira, Confluence, Sharepoint",
        },
      },
      {
        type: "complexFullSection",
        data: {
          subHeader: "Product, Native Mobile/Desktop UI",
          title: "Franchise Design System",
          description: "I created and maintained components for the Franchise Gap design system, and aimed to ensure a cohesive and consistent user experience across all franchise modules. Using user-centric design principles, components added, removed, updated and improved upon.",
          textColor: "text-blue-900",
          header: "01 Native Web Components",
          paragraphs: [
            "I was integral in the creation and maintenance of the Franchise design system. These components, combined with ag-grid components, make up our Franchise web modules."
          ],
          image: gapUR,
        },
      },
      {
        type: "simpleLeftTextSection",
        data: {
          textColor: "text-blue-900",
          header: "02 Color Usage",
          paragraphs: [
            "The color styles that we created for the Gap Franchise design system represent the brand, and affect text styles and components. I created visual documentation guides for color accessibility and usage to implement colors in all Franchise modules.",
            "AccessibiIity: proposed and implemented higher contrast colors that elevated our color contrast standards to WCAG Level AA."
          ],
          image: gapBS
        }
      },
      {
        type: "simpleRightTextSection",
        data: {
          textColor: "text-blue-900",
          header: "03 Typography",
          paragraphs: [
            "Our team of two created two typography categories for Franchise experiences. One style category for component experiences, and one style category for ag-grid tables.",
            "The typescale is used across experiences, and are implemented on the front-end as H1 - H5, P1 - P5, among other text styles. Our typography documentation and usage ensures consistency across all franchise modules."
          ],
          image: gapComponents,
        },
      },
      {
        type: "simpleLeftTextSection",
        data: {
          textColor: "text-blue-900",
          header: "04 Franchise Modules - Web UI",
          paragraphs: [
            "Our team also worked on Franchise modules to support all internal platforms that allow for order management and fulfillment, and facilitates all correspondence with Gap Inc third-party partners."
          ],
          image: gapConclusion
        }
      },
    ]
  },
  "geico": {
    sections: [
      {
        type: "complexSingleLogoTitleSection",
        data: {
          title: "Geico",
          title_bg_color: "linear-gradient(90deg, #E3EEFF 2%, #FFEFD0 100%)",
          textColor: "text-blue-900",
          image: geicoLogo,
          timeline_dates: "Jun 2021 - Dec 2023",
          timeline_text:
            "All proofs of concept, prototypes and designs were created for use by GEICO, Government Employees Insurance Company.",
          role_text:
            "As a Senior Product Designer, I worked on high-priority Enterprise GEICO Applications, and played an integral role in pioneering the GEICO Design System.",
          projects: [
            "B2B Application",
            "GEICO Design System",
            "Internal Application"
          ],
          tools: [
            "Figma, Figjam, Mural, Azure DevOps, Indesign, Illustrator, Photoshop, Sharepoint, Outlook, Widen Collective",
            "HTML, CSS, Javascript"
          ],
        },
      },
      {
        type: "simpleTextImageOverlaySection",
        data: {
          textColor: "text-blue-900",
          subHeader: "Product, Native Mobile/Desktop UI",
          header: "Design System",
          description: "I aimed to stay true to the GEICO brand by being playful, vibrant, and engaging. From using colors with intention to user-friendly controls, Hue puts the user first, establishing a unified design language, and fostering consistency across different channels.",
          image: geicoUR
        }
      },
      {
        type: "multipleImageFullSection",
        data: {
          textColor: "text-blue-900",
          backgroundColor: "bg-stone-100",
          category: "Competitive Analysis",
          description: "To reimagine our existing web elements to create a GEICO product, we had to first dive deep into design systems as products in the tech-field. We found key advantages and disadvantages that we wanted to include in our initiatives.",
          bullets: [
            "Because users are introduced to clear and consistent design throughout products using a design system, it establishes easily recognizable patterns that allows users to move throughout the experience as intended",
            "These design systems allowed tech companies to scale up their products, allowing companies like Apple and Google to build exponentially more products based around centralized design decisions"
          ],
          images: [geicoUR2, geicoUR3]
        }
      },
      {
        type: "complexFullSection",
        data: {
          title: "02 Brand Styles",
          description: "The foundation for the GEICO Design System is composed of core elements representing the brand, including colors, text styles, voice, and tone. I created visual documentation guides for Color Accessibility, Typography, and Icon Usage. To implement brand styles in Figma, I used my existing documentation to variables and tokens in Figma.",
          textColor: "text-blue-900",
          header: "Accessibility",
          paragraphs: [
            "I proposed and introduced a high-contrast dark mode update that would elevate our color contrast standards to the WCAG (Web Content Accessibility Guidelines) Level AAA standard and ADA (American Disabillities Act) Title III standard.",
            "Not only does it create a standard of inclusivity for those with visual impairments, it improves the overall user experience for all customers as well."
          ],
          image: geicoBS,
          leftColSpan: 6,
          rightColSpan: 4
        },
      },
      {
        type: "simpleRightTextSection",
        data: {
          textColor: "text-blue-900",
          backgroundColor: "bg-stone-100",
          header: "03 Native Mobile Components",
          paragraphs: [
            "After creating style documentation, I created the following components: image selection cards, card selections, buttons, checkboxes, progress indicator, a shopping bar experience, address auto complete, and planning for migrating our design system to React."
          ],
          image: geicoComponents,
        },
      },
      {
        type: "complexLeftTextImageListSection",
        data: {
          textColor: "text-blue-900",
          header: "Creating Components + Documentation",
          paragraphs: [
            "Design system components were created as Figma components with documentation pages for handoff, and also published on hue.geico.com as part of a weekly release."
          ],
          bulletTitles: [
            "Visual Examples",
            "Guidelines",
            "Dark-Mode"
          ],
          bullets: [
            "Component visuals contain mobile and desktop versions, and show designers how the component is used in the app.",
            "Documented guidance for designer and developer usage and handoff are written here.",
            "All of our experiences are available in dark mode-high contrast mode, which is documented in Figma and our live design system website."
          ],
          image: geicoComponents2
        }
      },
    ]
  },
  "obsidian": {
    sections: [
      {
        type: "simpleTitle",
        data: {
          title: "Obsidian",
          textColor: "text-blue-800",
          cardColor: "bg-white",
          title_bg_gradient:
            "radial-gradient(circle at 94.35384114583333% 89.61588541666666%, rgba(141,209,202,0.43) 0%, 20%, rgba(141,209,202,0) 40%)," +
            "radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(48,189,255,0.4257) 0%, 25%, rgba(48,189,255,0) 50%)," +
            "radial-gradient(circle at 6.165364583333333% 12.617187499999998%, rgba(65,186,174,0.43) 0%, 42%, rgba(65,186,174,0) 70%)," +
            "radial-gradient(circle at 86.611328125% 33.092447916666664%, rgba(192,64,22,0.43) 0%, 42%, rgba(192,64,22,0) 70%)," +
            "radial-gradient(circle at 48.9013671875% 49.521484375%, rgba(255,255,255,0.43) 0%, 100%, rgba(255,255,255,0) 100%)",
          timeline_dates: "Nov 2019 - May 2022",
          timeline_text:
            "All proofs of concept, prototypes and designs were created for use by Obsidian Global LLC.",
          role_text:
            "As a UI/UXDesigner, I was an internal contractor that partnered with the tech team to create and maintain the company website.",
          projects: [
            "Obsidian Global",
            "Cirrus Strategies",
          ],
          tools: [
            "Invision, Mural, Adobe Creative Suite: Indesign Photoshop, Illustrator",
            "HTML, CSS, Javascript"
          ],
        },
      },
      {
        type: "workShowcase",
        data: {
          image: obsidian,
          category: "UI/UX, Frontend - Desktop + Mobile Experience Build",
          title: "OBSIDIAN GLOBAL",
          description: "Designed and built new user-facing pages by creating UI/UX wireframes, and utilizing HTML, CSS and Javascript on the front-end to customize web pages.",
          buttonText: "View case →",
          onButtonClick: () => {
            window.location.href = "/projects/obsidian/obsidian-global";
          }
        }
      },
      {
        type: "workShowcase",
        data: {
          image: obsidian2,
          category: "Product and UI/UX Design",
          title: "CIRRUS STRATEGIES",
          description: "Designed a memory-care device that guides patients and their caregivers throughout all stages of memory loss.",
          buttonText: "View case →",
          onButtonClick: () => {
            window.location.href = "/projects/obsidian/cirrus-strategies";
          }
        }
      }
    ],
  },
  "myeyedr": {
    sections: [
      {
        type: "simpleTitle",
        data: {
          title: "Obsidian",
          image: myeyedrLogo,
          textColor: "text-black",
          cardColor: "bg-sky-200",
          timeline_dates: "June 2018 - Oct 2018 ",
          timeline_text:
            "All proofs of concept, prototypes and designs were created for use by myeyedr.",
          role_text:
            "As a UX Researcher, I conducted research on and tested our existing experiences. We wanted to gather more data on our user groups, and strategize how to reach younger audiences.",
          projects: [
            "Appealing to a younger audience",
            "Washington D.C. eyeglasses campaign",
          ],
          tools: [
            "Sketch, Adobe Creative Suite: Indesign, Illustrator, Photoshop, Premiere",
            "User Research and Strategy, Moderated Usability Tests, Facilitated UX Workshops, User Interviews, Research Analysis"
          ],
        },
      },
      {
        type: "simpleLeftTextSection",
        data: {
          textColor: "text-sky-300",
          header: "UX Research",
          paragraphs: [
            "To find ways to target a wider audience and increase sales, we conducted UX research to dive deeper into customer interactions with our product."
          ],
          image: myeyedrUR
        }
      },
    ]
  }
};

export default projectData;
