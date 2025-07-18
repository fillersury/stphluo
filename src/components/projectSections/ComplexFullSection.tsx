import React from "react";

interface ComplexFullSectionData {
  subHeader?: string;
  title: string;
  header: string;
  description: string;
  paragraphs: string[];
  image: string;
  textColor: string;
  leftColSpan?: number;
  rightColSpan?: number;
}

const ComplexFullSection = ({
  subHeader,
  title,
  header,
  description,
  paragraphs,
  image,
  textColor,
  leftColSpan = 3,
  rightColSpan = 2,
}: ComplexFullSectionData) => {
    return (
        <section>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 py-5 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 w-full min-h-[400px] max-w-screen-xl mx-auto px-6">
                    <div className={`md:col-span-${leftColSpan} flex flex-col justify-end h-full`}>
                        <div className="m-4 mb-12">
                            {subHeader && (
                                <h3 className={`${textColor} text-sm md:text-base font-semibold mb-1`}>{subHeader}</h3>
                            )}
                            <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-3`}>{title}</h2>
                            <p className="text-sm sm:text-lg font-light">{description}</p>
                        </div>
                        <img src={image} alt={header} className="w-full" />
                    </div>

                    <div className={`md:col-span-${rightColSpan} flex flex-col items-start md:items-end justify-end h-full text-left md:text-right px-5 md:px-0`}>
                        <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-2 md:mb-6`}>{header}</h2>
                        {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-sm sm:text-base font-light mb-2 md:mb-4">
                            {paragraph}
                        </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComplexFullSection;