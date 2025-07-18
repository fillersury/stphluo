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
            <div className="max-w-5xl mx-auto py-10 md:py-16 px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-10 w-full">
                    <div className="col-span-3 flex items-end h-full">
                        <img
                            src={image}
                            alt={header}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col items-start md:items-end justify-end h-full text-left md:text-right">
                        <h2 className={`font-bold text-md md:text-3xl mb-2 md:mb-6 ${textColor}`}>
                            {header}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm md:text-base font-light mb-4">
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