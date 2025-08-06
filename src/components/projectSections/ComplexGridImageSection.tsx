import React from "react";

interface ComplexGridImageSection {
    header: string;
    descriptions: string[];
    images: string[];
    textColor: string;
    bgColor: string;
}

const ComplexGridImageSection = ({
    header,
    descriptions,
    images,
    textColor,
    bgColor
}: ComplexGridImageSection) => {
    return (
        <section className={`${bgColor}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10">
                {header && (
                    <h2 className={`${textColor} font-bold text-md sm:text-3xl py-1 mb-10 px-10 md:px-48`}>
                        {header}
                    </h2>
                )}
                {descriptions.map((description, idx) => (
                    <p key={idx} className="text-sm md:text-base text-stone-600 px-10 md:px-48">{description}</p>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-2 py-10 px-10">
                    {images.map((image, idx) => (
                        <div key={idx} className="w-full py-1">
                            <img
                            src={image}
                            alt={`${header} logo ${idx + 1}`}
                            className="mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComplexGridImageSection;