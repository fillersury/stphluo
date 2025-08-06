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
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 px-10 px-10 md:px-48">
                {header && (
                    <h2 className={`${textColor} font-bold text-md sm:text-3xl py-1 mb-5`}>
                        {header}
                    </h2>
                )}
                {descriptions.map((description, idx) => (
                    <p key={idx} className="text-sm md:text-base text-stone-600 my-5">{description}</p>
                ))}
                {images.map((image, idx) => (
                    <div key={idx} className="w-full py-3">
                        <img
                        src={image}
                        alt={`${header} logo ${idx + 1}`}
                        className="mx-auto"
                        />
                    </div>
                ))}
                
            </div>
        </section>
    )
}

export default SimpleImageSection;