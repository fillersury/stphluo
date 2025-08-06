import React from "react";

interface SimpleLeftTextSectionData {
    header: string;
    paragraphs: string[];
    image: string;
    textColor: string;
    bgColor: string;
}

const SimpleLeftTextSection = ({ header, paragraphs, image, textColor, bgColor }: SimpleLeftTextSectionData) => {

    return (
        <section className={`${bgColor}`}>
            <div className="max-w-5xl mx-auto py-10 md:py-16 px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-10 w-full min-h-[400px]">
                    <div className="md:col-span-2 flex flex-col justify-end md:h-full">
                        <h2 className={`font-bold text-md sm:text-3xl mb-5 md:mb-6 ${textColor}`}>
                            {header}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm md:text-base font-light mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="md:col-span-3 flex items-end h-full">
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

export default SimpleLeftTextSection;
