import React from "react";

interface SimpleListSectionData {
    header: string;
    description: string;
    textColor: string;
    listType: string;
    listItems: string[];
    listItemTitles: string[];
}

const SimpleListSection = ({
    header,
    description,
    textColor,
    listType,
    listItems,
    listItemTitles,
}: SimpleListSectionData) => {

    return (
        <section className="bg-stone-100">
            <div className="max-w-5xl mx-auto flex flex-col items-left py-10 md:py-16 px-10">
                <h2 className={`${textColor} font-bold text-md sm:text-3xl mb-3 sm:mb-6`}>{header}</h2>
                <p className="text-sm md:text-base text-stone-600 mb-3">{description}</p>
                <ol className={`${listType} text-sm md:text-base`}>
                    {listItems.map((listItem, idx) => (
                        <li key={idx} className="mb-2 text-stone-500">
                            <span className="text-stone-600 font-bold">
                                {listItemTitles[idx] && (
                                    <>{listItemTitles[idx]}: </>
                                )}
                            </span>
                            {listItem}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default SimpleListSection;
