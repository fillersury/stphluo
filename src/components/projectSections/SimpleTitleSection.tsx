import React from "react";

interface TitleData {
    title: string;
    textColor: string;
    cardColor: string;
    title_bg_color: string;
    title_bg_gradient: string;
    image?: string;
    timeline_dates: string;
    timeline_text: string;
    role_text: string;
    projects: string[];
    tools: string[];
}

const SimpleTitleSection = ({
    title,
    textColor,
    cardColor,
    title_bg_color,
    title_bg_gradient,
    image,
    timeline_dates,
    timeline_text,
    role_text,
    projects,
    tools
}: TitleData) => {
    return (
        <section
            className={`${title_bg_color}`}
            style={{ background: title_bg_gradient }}
        >
            <div className="max-w-5xl mx-auto flex flex-col items-center py-16">
                {image && (
                    <img src={image} alt={title} className="max-w-sm py-16" />
                )}
                <div className={`grid grid-cols-4 gap-10 py-6 px-16 w-full ${cardColor} rounded-3xl`}>
                    <div>
                        <h1 className={`${textColor} text-xl font-bold mb-4`}>Timeline</h1>
                        <p className="font-normal mb-4">🕗 {timeline_dates}</p>
                        <p>{timeline_text}</p>
                    </div>
                    <div>
                        <h1 className={`${textColor} text-xl font-bold mb-4`}>Role</h1>
                        <p>📝 {role_text}</p>
                    </div>
                    <div>
                        <h1 className={`${textColor} text-xl font-bold mb-4`}>Projects</h1>
                        {projects.map((project, index) => (
                            <p key={index} className="mb-4">
                                ➡️ {project}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h1 className={`${textColor} text-xl font-bold mb-4`}>Tools</h1>
                        {tools.map((tool, index) => (
                            <p key={index} className="mb-4">
                                🛠️ {tool}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleTitleSection;
