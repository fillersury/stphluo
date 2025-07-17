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
  leftColSpan = 7,
  rightColSpan = 3,
}: ComplexFullSectionData) => {
    return (
        <section>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-16 px-10">
                <div className="grid grid-cols-10 gap-10 w-full min-h-[400px]">
                    <div className={`col-span-${leftColSpan} flex flex-col justify-end h-full`}>
                        <div className="m-4 mb-12">
                            {subHeader && (
                                <h3 className={`${textColor} font-semibold mb-1`}>{subHeader}</h3>
                            )}
                            <h2 className={`${textColor} font-bold text-3xl mb-3`}>{title}</h2>
                            <p className="text-lg font-light">{description}</p>
                        </div>
                        <img src={image} alt={header} className="w-full" />
                    </div>

                    <div className={`col-span-${rightColSpan} flex flex-col items-end justify-end h-full text-right`}>
                        <h2 className={`${textColor} font-bold text-3xl mb-6`}>{header}</h2>
                        {paragraphs.map((paragraph, index) => (
                        <p key={index} className="font-light mb-4">
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