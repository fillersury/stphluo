import React from "react";

interface SimpleLeftBulletImageSectionData {
    header: string;
    bullets: string[];
    image: string;
    textColor: string;
    backgroundColor: string;
}

const SimpleLeftBulletImageSection = ({ header, bullets, image, textColor, backgroundColor }: SimpleLeftBulletImageSectionData) => {
    return (
        <section className={backgroundColor}>
            <div className="max-w-5xl mx-auto py-10 md:py-16 px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-10 w-full">
                    <div className="col-span-3 flex items-end h-full">
                        <img
                            src={image}
                            alt={header}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col items-start md:items-start justify-start h-full text-left md:text-left">
                        <h2 className={`font-bold text-md md:text-2xl mb-2 md:mb-6 text-left md:text-right ${textColor}`}>
                            {header}
                        </h2>
                        <ul className="list-disc pl-5">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-sm md:text-base font-light mb-2">
                            {bullet}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SimpleLeftBulletImageSection;