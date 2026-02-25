import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData, { SectionData } from "../data/projectData";
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
import ComplexDataFullSection from "../components/projectSections/ComplexDataFullSection";
import SimpleLeftBulletImageSection from "../components/projectSections/SimpleLeftBulletImageSection";
import SimpleImageSection from "../components/projectSections/SimpleImageSection";
import SimpleCaptionImageSection from "../components/projectSections/simpleCaptionImageSection";
import ComplexGridImageSection from "../components/projectSections/ComplexGridImageSection";
import ImageSlideSection from "../components/projectSections/ImageSlideSection";

const GEICO_PROJECT_KEY = "geico";
const GEICO_ACCESS_STORAGE_KEY = "geico_access_granted";
const GEICO_PASSWORD_HASH = import.meta.env.VITE_GEICO_PASSWORD_HASH;

const toSha256 = async (value: string | undefined) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
};

const WorkDetail = () => {
    const { projectName, caseName } = useParams();
    const [isAccessGranted, setIsAccessGranted] = useState(false);
    const [isAccessCheckDone, setIsAccessCheckDone] = useState(false);
    const project = projectData[projectName ?? ""];

    useEffect(() => {
        let isCancelled = false;

        const checkAccess = async () => {
            console.log("Checking access for project:", projectName);

            if (projectName !== GEICO_PROJECT_KEY) {
                setIsAccessGranted(true);
                setIsAccessCheckDone(true);
                return;
            }

            const hasSessionAccess = sessionStorage.getItem(GEICO_ACCESS_STORAGE_KEY) === "true";
            console.log("Session access:", hasSessionAccess);

            if (hasSessionAccess) {
                setIsAccessGranted(true);
                setIsAccessCheckDone(true);
                return;
            }

            const enteredPassword = window.prompt("Enter password to access this project:");
            console.log("Entered password:", enteredPassword);

            if (!enteredPassword) {
                setIsAccessGranted(false);
                setIsAccessCheckDone(true);
                return;
            }

            if (!GEICO_PASSWORD_HASH) {
                console.error("No password hash available.");
                setIsAccessGranted(false);
                setIsAccessCheckDone(true);
                return;
            }

            const enteredHash = await toSha256(enteredPassword);
            console.log("Entered hash:", enteredHash);

            const isValid = enteredHash === GEICO_PASSWORD_HASH;
            console.log("Is valid:", isValid);

            if (!isCancelled) {
                if (isValid) {
                    sessionStorage.setItem(GEICO_ACCESS_STORAGE_KEY, "true");
                } else {
                    alert("Incorrect password. Please try again.");
                }

                setIsAccessGranted(isValid);
                setIsAccessCheckDone(true);
            }
        };

        const timeoutId = window.setTimeout(() => {
            void checkAccess();
        }, 0);
        
        return () => {
            isCancelled = true;
            window.clearTimeout(timeoutId);
        };
    }, [projectName]);

    const sections = caseName ? project?.cases?.[caseName]?.sections : null;

    if (!isAccessCheckDone) return null;
    if (!isAccessGranted) return <NotFound />;

    const returnSections = (sectionsList: any[]) => (
        <>
            {sectionsList.map((section, idx) => {
                switch(section.type) {
                    case "simpleTitle": return <SimpleTitleSection key={idx} {...section.data} />;
                    case "simpleFullSection": return <SimpleFullSection key={idx} {...section.data} />;
                    case "simpleLeftTextSection": return <SimpleLeftTextSection key={idx} {...section.data} />;
                    case "simpleRightTextSection": return <SimpleRightTextSection key={idx} {...section.data} />;
                    case "multipleLogosTitleSection": return <MultipleLogosTitleSection key={idx} {...section.data} />;
                    case "complexFullSection": return <ComplexFullSection key={idx} {...section.data} />;
                    case "complexSingleLogoTitleSection": return <ComplexSingleLogoTitleSection key={idx} {...section.data} />;
                    case "simpleTextImageOverlaySection": return <SimpleTextImageOverlaySection key={idx} {...section.data} />;
                    case "multipleImageFullSection": return <MultipleImageFullSection key={idx} {...section.data} />;
                    case "complexLeftTextImageListSection": return <ComplexLeftTextImageListSection key={idx} {...section.data} />;
                    case "workShowcase": return <WorkShowcase key={idx} {...section.data} />;
                    case "simpleListSection": return <SimpleListSection key={idx} {...section.data} />;
                    case "complexDataFullSection": return <ComplexDataFullSection key={idx} {...section.data} />;
                    case "simpleLeftBulletImageSection": return <SimpleLeftBulletImageSection key={idx} {...section.data} />;
                    case "simpleImageSection": return <SimpleImageSection key={idx} {...section.data} />;
                    case "simpleCaptionImageSection": return <SimpleCaptionImageSection key={idx} {...section.data} />;
                    case "complexGridImageSection": return <ComplexGridImageSection key={idx} {...section.data} />;
                    case "imageSlideSection": return <ImageSlideSection key={idx} {...section.data} />;
                    default: return null;
                }
            })}
        </>
    );

    if (project && !sections) return returnSections(project.sections);
    if (project && sections) return returnSections(sections);
    return <NotFound />;
};

export default WorkDetail;