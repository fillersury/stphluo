import React from "react";

interface TitleData {
    logos: string[]
    title: string;
    cardColor: string;
    title_bg_color: string;
    textColor: string;
    timeline_dates: string;
    timeline_text: string;
    role_text: string;
    projects: string[];
    tools: string[]
}

const SimpleTitleSection = ({
    logos,
    title,
    cardColor,
    title_bg_color,
    textColor,
    timeline_dates,
    timeline_text,
    role_text,
    projects,
    tools
}: TitleData) => {
    return (
        <section style={{ background: title_bg_color }}>
            <div className="max-w-5xl mx-auto flex flex-col items-center px-5 md:px-0 py-16">
                <div className={`grid grid-cols-1 md:grid-cols-${logos.length} gap-10 py-6 px-6 sm:px-12 md:px-16 w-full pb-20`}>
                    <img
                        src={logos[0]}
                        alt={`${title}`}
                        className="md:hidden w-full max-w-[100px] object-contain mx-auto"
                    />
                    {logos.map((logoSrc, idx) => (
                        <div key={idx} className="hidden md:flex justify-center items-center">
                            <img
                                src={logoSrc}
                                alt={`${title} logo ${idx + 1}`}
                                className="w-full max-w-[110px] object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-10 py-6 px-10 md:px-16 w-full rounded-3xl ${cardColor}`}>
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Timeline</h1>
                        <p className="text-sm md:text-base font-normal mb-2 md:mb-4">🕗 {timeline_dates}</p>
                        <p className="text-sm md:text-base mb-2 md:mb-4">{timeline_text}</p>
                    </div>
                    <div>
                        <h1 className={`text-lg md:text-xl font-bold ${textColor} mb-2 md:mb-4`}>Role</h1>
                        <p className="text-sm md:text-base mb-2 md:mb-4">📝 {role_text}</p>
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

export default SimpleTitleSection;