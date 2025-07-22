import React from "react";

interface dataPointObject {
    category: string;
    value: string;
}

interface dataPointsContainer {
    title: string;
    dataPoints: dataPointObject[]; 
}

interface ComplexDataFullSectionData {
    subHeader: string;
    header: string;
    descriptions: string[];
    textColor: string;
    bgColor: string;
    data: dataPointsContainer[];
}

const ComplexDataFullSection = ({
    subHeader,
    header,
    descriptions,
    textColor,
    bgColor,
    data
}: ComplexDataFullSectionData) => {
    return (
        <section className={`${bgColor}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 px-10">
                <h3 className={`${textColor} text-sm md:text-base font-semibold mb-1`}>{subHeader}</h3>
                <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-5 sm:mb-6`}>{header}</h2>
                {descriptions.map((description, index) => (
                    <p key={index} className="text-sm md:text-base font-light mb-7">
                        {description}
                    </p>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 w-full">
                    {data.map((dataGroup, index) => (
                        <div key={index}>
                            <div className="md:col-span-1 flex flex-col justify-start md:h-full">
                                <p className="text-xs md:text-sm font-light mb-2">{dataGroup.title}</p>
                                {dataGroup.dataPoints.map((dataPoint, idx) => (
                                    <p key={idx} className="text-xs md:text-sm font-light mb-1">
                                        {dataPoint.category}: {dataPoint.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComplexDataFullSection;