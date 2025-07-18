import React from "react";

interface SimpleFullSectionData {
    subHeader: string;
    header: string;
    description: string;
    image: string;
    textColor: string;
}

const SimpleFullSection = ({ subHeader, header, description, image, textColor }: SimpleFullSectionData) => {
    return (
        <section>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 px-10">
                <h3 className={`${textColor} text-sm md:text-base font-semibold mb-1`}>{subHeader}</h3>
                <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-5 sm:mb-6`}>{header}</h2>
                <p className="text-sm sm:text-lg font-light">{description}</p>
                <img src={image} alt={header} className="w-full py-6 md:py-10" />
            </div>
        </section>
    )
}

export default SimpleFullSection;