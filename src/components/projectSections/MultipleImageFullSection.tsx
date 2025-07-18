import React from "react";

interface MultipleImageFullSectionData {
    category: string;
    header: string;
    description: string;
    bullets: string[];
    images: string[];
    textColor: string;
    backgroundColor: string;
}

const MultipleImageFullSection = ({ category, header, description, images, bullets, textColor, backgroundColor }: MultipleImageFullSectionData) => {
    return (
        <section className={`${backgroundColor}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-16 px-10 lg:px-0">
                {images.map((image, idx) => (
                    <div key={idx} className="w-full py-5">
                        <img src={image} alt={`${header} logo ${idx + 1}`} />
                    </div>
                ))}

                <p className="mb-2 md:mb-5">
                    <span className={`${textColor} italic text-base md:text-xl font-semibold`}>
                        {category}
                    </span>: <span className="text-sm md:text-base text-stone-700">
                        {description}
                    </span>
                </p>

                <ul className="list-disc pl-6 text-stone-700 text-sm md:text-base">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className="mb-2">
                    {bullet}
                    </li>
                ))}
                </ul>
            </div>
        </section>
    )
}

export default MultipleImageFullSection;