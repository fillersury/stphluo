import React from "react";

interface TitleData {
    title: string;
    title_bg_color: string;
    textColor: string;
    image: string;
    timeline_dates: string;
    timeline_text: string;
    role_text: string;
    projects: string[];
    tools: string[];
}

const ComplexSingleLogoTitleSection = ({ title, title_bg_color, textColor, image, timeline_dates, timeline_text, role_text, projects, tools }: TitleData) => {
    return (
        <section style={{ background: title_bg_color }}>
            <div className="max-w-5xl mx-auto flex flex-col items-center px-5 md:px-0 py-10 md:py-16">
                <img src={image} alt={title} className="px-5 md:px-0 max-w-xl pb-10 md:pb-20" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 py-6 px-10 md:px-16 w-full bg-white rounded-3xl">
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Timeline</h1>
                        <p className="text-sm md:text-basefont-normal mb-2 md:mb-4">🕗 {timeline_dates}</p>
                        <p className="text-sm md:text-base">{timeline_text}</p>
                    </div>
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Role</h1>
                        <p className="text-sm md:text-base">📝 {role_text}</p>
                    </div>
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Projects</h1>
                        {projects.map((project, index) => (
                            <p key={index} className="text-sm md:text-base mb-2 md:mb-4">
                            ➡️ {project}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Tools</h1>
                        {tools.map((tool, index) => (
                            <p key={index} className="text-sm md:text-base mb-2 md:mb-4">
                                🛠️ {tool}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComplexSingleLogoTitleSection;