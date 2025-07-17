import React from "react";

interface SimpleLeftTextSectionData {
    header: string;
    paragraphs: string[];
    image: string;
    textColor: string;
}

const SimpleLeftTextSection = ({ header, paragraphs, image, textColor }: SimpleLeftTextSectionData) => {

    return (
        <section className="bg-stone-100">
            <div className="max-w-5xl mx-auto py-16 px-10">
                <div className="grid grid-cols-5 gap-10 w-full min-h-[400px]">
                    <div className="col-span-2 flex flex-col justify-end h-full">
                        <h2 className={`font-bold text-3xl mb-6 ${textColor}`}>
                            {header}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="font-light mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="col-span-3 flex items-end h-full">
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
