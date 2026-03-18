import { ComponentType, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import projectData, { SectionData, SectionType } from "../data/projectData";
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
const SLIDE_BATCH_SIZE = 4;

const sectionComponents: Record<SectionType, ComponentType<any>> = {
    simpleTitle: SimpleTitleSection,
    simpleFullSection: SimpleFullSection,
    simpleLeftTextSection: SimpleLeftTextSection,
    simpleRightTextSection: SimpleRightTextSection,
    multipleLogosTitleSection: MultipleLogosTitleSection,
    complexFullSection: ComplexFullSection,
    complexSingleLogoTitleSection: ComplexSingleLogoTitleSection,
    simpleTextImageOverlaySection: SimpleTextImageOverlaySection,
    multipleImageFullSection: MultipleImageFullSection,
    complexLeftTextImageListSection: ComplexLeftTextImageListSection,
    workShowcase: WorkShowcase,
    simpleListSection: SimpleListSection,
    complexDataFullSection: ComplexDataFullSection,
    simpleLeftBulletImageSection: SimpleLeftBulletImageSection,
    simpleImageSection: SimpleImageSection,
    simpleCaptionImageSection: SimpleCaptionImageSection,
    complexGridImageSection: ComplexGridImageSection,
    imageSlideSection: ImageSlideSection,
    conclusion: SimpleFullSection,
};

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
    const [visibleSectionCount, setVisibleSectionCount] = useState(SLIDE_BATCH_SIZE);
    const project = projectData[projectName ?? ""];
    const sections = useMemo(
        () => (caseName ? project?.cases?.[caseName]?.sections : project?.sections) ?? null,
        [caseName, project]
    );
    const isSlideDeckProject = useMemo(
        () => Boolean(sections?.length) && sections!.every((section) => section.type === "imageSlideSection"),
        [sections]
    );
    const visibleSections = useMemo(() => {
        if (!sections) {
            return null;
        }

        return isSlideDeckProject ? sections.slice(0, visibleSectionCount) : sections;
    }, [isSlideDeckProject, sections, visibleSectionCount]);

    useEffect(() => {
        let isCancelled = false;

        const checkAccess = async () => {
            if (projectName !== GEICO_PROJECT_KEY) {
                setIsAccessGranted(true);
                setIsAccessCheckDone(true);
                return;
            }

            const hasSessionAccess = sessionStorage.getItem(GEICO_ACCESS_STORAGE_KEY) === "true";

            if (hasSessionAccess) {
                setIsAccessGranted(true);
                setIsAccessCheckDone(true);
                return;
            }

            const enteredPassword = window.prompt("Enter password to access this project:");

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
            const isValid = enteredHash === GEICO_PASSWORD_HASH;

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

        void checkAccess();
        
        return () => {
            isCancelled = true;
        };
    }, [projectName]);

    useEffect(() => {
        setVisibleSectionCount(SLIDE_BATCH_SIZE);
    }, [projectName, caseName]);

    if (!isAccessCheckDone) return null;
    if (!isAccessGranted) return <NotFound />;
    if (!project || !visibleSections) return <NotFound />;

    return (
        <div>
            {visibleSections.map((section: SectionData, idx) => {
                const SectionComponent = sectionComponents[section.type];

                if (!SectionComponent) {
                    return null;
                }

                return <SectionComponent key={`${section.type}-${idx}`} {...section.data} />;
            })}
            {isSlideDeckProject && sections && visibleSectionCount < sections.length ? (
                <div className="mx-auto flex max-w-5xl justify-center px-6 py-8">
                    <button
                        type="button"
                        onClick={() => setVisibleSectionCount((current) => current + SLIDE_BATCH_SIZE)}
                        className="rounded-3xl bg-stone-800 px-8 py-3 text-white transition-colors hover:bg-stone-700"
                    >
                        Load more slides
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default WorkDetail;
