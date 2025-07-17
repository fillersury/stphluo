import React from "react";

interface SimpleRightTextSectionData {
    header: string;
    paragraphs: string[];
    image: string;
    textColor: string;
    backgroundColor: string;
}

const SimpleRightTextSection = ({ header, paragraphs, image, textColor, backgroundColor }: SimpleRightTextSectionData) => {
    return (
        <section className={backgroundColor}>
            <div className="max-w-5xl mx-auto py-16 px-10">
                <div className="grid grid-cols-5 gap-10 w-full">
                    <div className="col-span-3 flex items-end h-full">
                        <img
                            src={image}
                            alt={header}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col items-end justify-end h-full text-right">
                        <h2 className={`font-bold text-3xl mb-6 ${textColor}`}>
                            {header}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="font-light mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SimpleRightTextSection;