import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import SimpleTitleSection from "../components/projectSections/SimpleTitleSection";
import SimpleFullSection from "../components/projectSections/SimpleFullSection";
import SimpleLeftTextSection from "../components/projectSections/SimpleLeftTextSection";
import SimpleRightTextSection from "../components/projectSections/SimpleRightTextSection";
import MultipleLogosTitleSection from "../components/projectSections/MultipleLogosTitleSection";
import ComplexFullSection from "../components/projectSections/ComplexFullSection";
import ComplexSingleLogoTitleSection from "../components/projectSections/ComplexSingleLogoTitleSection";
import SimpleTextImageOverlaySection from "../components/projectSections/SimpleTextImageOverlaySection";
import MultipleImageFullSection from "../components/projectSections/MultipleImageFullSection";
import ComplexLeftTextImageListSection from "../components/projectSections/ComplexLeftTextImageListSection";
import NotFound from "./NotFound";
import WorkShowcase from "../components/WorkShowcase";
import SimpleListSection from "../components/projectSections/SimpleListSection";

const WorkDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectData[projectName ?? ""];

  if (!project) return <NotFound />;

  return (
    <>
        {project.sections.map((section, idx) => {
            switch(section.type) {
            case "simpleTitle": 
                return <SimpleTitleSection key={idx} {...section.data} />;
            case "simpleFullSection":
                return <SimpleFullSection key={idx} {...section.data} />;
            case "simpleLeftTextSection":
                return <SimpleLeftTextSection key={idx} {...section.data} />;
            case "simpleRightTextSection":
                return <SimpleRightTextSection key={idx} {...section.data} />;
            case "multipleLogosTitleSection":
                return <MultipleLogosTitleSection key={idx} {...section.data} />;
            case "complexFullSection":
                return <ComplexFullSection key={idx} {...section.data} />;
            case "complexSingleLogoTitleSection":
                return <ComplexSingleLogoTitleSection key={idx} {...section.data} />;
            case "simpleTextImageOverlaySection":
                return <SimpleTextImageOverlaySection key={idx} {...section.data} />;
            case "multipleImageFullSection":
                return <MultipleImageFullSection key={idx} {...section.data} />;
            case "complexLeftTextImageListSection":
                return <ComplexLeftTextImageListSection key={idx} {...section.data} />;
            case "workShowcase":
                return <WorkShowcase key={idx} {...section.data} />;
            case "simpleListSection":
                return <SimpleListSection key={idx} {...section.data} />;
            default:
                return null;
            }
        })}
    </>
  );
};

export default WorkDetail;
