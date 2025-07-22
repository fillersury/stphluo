import React from "react";

interface SimpleFullSectionData {
    subHeader: string;
    header: string;
    descriptions: string[];
    image: string;
    textColor: string;
    bgColor: string;
}

const SimpleFullSection = ({
    subHeader,
    header,
    descriptions,
    image,
    textColor,
    bgColor
}: SimpleFullSectionData) => {
    return (
        <section className={`${bgColor}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 px-10">
                <h3 className={`${textColor} text-sm md:text-base font-semibold mb-1`}>{subHeader}</h3>
                <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-5 sm:mb-6`}>{header}</h2>
                {descriptions.map((description, index) => (
                    <p key={index} className="text-sm md:text-base font-light mb-4">
                        {description}
                    </p>
                ))}
                {image && (
                    <img src={image} alt={header} className="w-full py-6 md:py-10" />
                )}
            </div>
        </section>
    )
}

export default SimpleFullSection;