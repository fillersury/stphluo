import React from "react";

interface TitleData {
    logos: string[]
    title: string;
    title_bg_color: string;
    textColor: string;
    timeline_dates: string;
    timeline_text: string;
    role_text: string;
    projects: string[];
    tools: string
}

const SimpleTitleSection = ({ logos, title, title_bg_color, textColor, timeline_dates, timeline_text, role_text, projects, tools }: TitleData) => {
    return (
        <section style={{ background: title_bg_color }}>
            <div className="max-w-5xl mx-auto flex flex-col items-center py-16">
                <div className="grid grid-cols-4 gap-10 py-6 px-16 w-full pb-20">
                    {logos.map((logoSrc, idx) => (
                        <div key={idx} className="flex justify-center items-center">
                        <img
                            src={logoSrc}
                            alt={`${title} logo ${idx + 1}`}
                            className="max-w-xs object-contain"
                        />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-20 py-6 px-16 w-full bg-white rounded-3xl">
                    <div>
                        <h1 className={`text-xl font-bold ${textColor} mb-4`}>Timeline</h1>
                        <p className="font-normal mb-4">🕗 {timeline_dates}</p>
                        <p>{timeline_text}</p>
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold ${textColor} mb-4`}>Role</h1>
                        <p>📝 {role_text}</p>
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold ${textColor} mb-4`}>Projects</h1>
                        {projects.map((project, index) => (
                            <p key={index} className="mb-4">
                            ➡️ {project}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold ${textColor} mb-4`}>Tools</h1>
                        <p>🛠️ {tools}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleTitleSection;