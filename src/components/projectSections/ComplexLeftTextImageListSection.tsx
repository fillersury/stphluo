import React from "react";

interface ComplexLeftTextImageListSectionData {
    header: string;
    paragraphs: string[];
    image: string;
    textColor: string;
    bullets: string[];
    bulletTitles: string[];
}

const ComplexLeftTextImageListSection = ({ header, paragraphs, image, textColor, bullets, bulletTitles }: ComplexLeftTextImageListSectionData) => {

    return (
        <section className="bg-stone-100">
            <div className="max-w-5xl mx-auto pb-16 px-10">
                <div className="grid grid-cols-5 gap-10 w-full">
                    <div className="col-span-3 flex flex-col justify-start h-full pt-16 px-28">
                        <h2 className={`italic font-semibold text-xl mb-6 ${textColor}`}>
                            {header}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                        <ol className="list-decimal list-inside px-3">
                            {bullets.map((bullet, idx) => (
                                <li key={idx} className="mb-2 text-stone-500">
                                <span className="text-purple-600">{bulletTitles[idx]}:</span> {bullet}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="col-span-2 flex items-end max-w-[300px]">
                        <img
                            src={image}
                            alt={header}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplexLeftTextImageListSection;
