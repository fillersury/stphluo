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
            <div className="max-w-5xl mx-auto relative py-16">
                <img src={image} alt={header} className="w-full" />
                
                <div className={`absolute inset-0 flex flex-col justify-end items-start px-36 py-20 text-black`}>
                    <h3 className={`${textColor} font-semibold mb-1`}>{subHeader}</h3>
                    <h2 className={`${textColor} font-bold text-3xl mb-3`}>{header}</h2>
                    <p className="text-lg font-light max-w-md">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default SimpleTextImageOverlaySection;