import React from "react";

interface SimpleTextImageOverlaySectionData {
    textColor: string;
    subHeader: string;
    header: string;
    description: string;
    image: string;
}

const SimpleTextImageOverlaySection = ({ textColor, subHeader, header, description, image }: SimpleTextImageOverlaySectionData) => {
    return (
        <section>
            <div className="max-w-5xl mx-auto relative py-10 md:py-16">
                <img src={image} alt={header} className="hidden lg:block w-full" />
                
                <div className={`lg:absolute lg:inset-0 flex flex-col justify-end items-start px-10 md:px-20 lg:px-36 px-10 md:px-15 lg:py-20 text-black`}>
                    <h3 className={`${textColor} text-sm md:text-base font-semibold mb-1`}>{subHeader}</h3>
                    <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-3`}>{header}</h2>
                    <p className="text-sm md:text-lg font-light lg:max-w-md">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default SimpleTextImageOverlaySection;