import React from "react";

interface SimpleListSectionData {
    header: string;
    textColor: string;
    listItems: string[];
    listItemTitles: string[];
}

const SimpleListSection = ({
    header,
    textColor,
    listItems,
    listItemTitles,
}: SimpleListSectionData) => {

    return (
        <section className="bg-stone-100">
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 px-10">
                <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-5 sm:mb-6`}>{header}</h2>
                <ol className="list-decimal list-inside text-sm md:text-base">
                    {listItems.map((listItem, idx) => (
                        <li key={idx} className="mb-2 text-stone-500">
                            <span className="text-stone-600 font-bold">{listItemTitles[idx]}:</span> {listItem}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default SimpleListSection;
