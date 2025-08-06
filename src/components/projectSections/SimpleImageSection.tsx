import React from "react";

interface SimpleImageSectionData {
    header: string;
    descriptions: string[];
    images: string[];
    textColor: string;
    bgColor: string;
}

const SimpleImageSection = ({
    header,
    descriptions,
    images,
    textColor,
    bgColor
}: SimpleImageSectionData) => {
    return (
        <section className={`${bgColor}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 px-10 md:px-48">
                {header && (
                    <h2 className={`${textColor} font-bold text-md sm:text-3xl py-1 mb-10`}>
                        {header}
                    </h2>
                )}
                {images.map((image, idx) => (
                    <div key={idx} className="w-full py-1">
                        <img
                        src={image}
                        alt={`${header} logo ${idx + 1}`}
                        className="mx-auto"
                        />
                    </div>
                ))}
                {descriptions.map((description, idx) => (
                    <p key={idx} className="text-sm md:text-base text-stone-600">{description}</p>
                ))}
                
            </div>
        </section>
    )
}

export default SimpleImageSection;