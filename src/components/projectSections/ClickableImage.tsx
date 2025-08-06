import React from "react";

interface ClickableImageData {
    header: string;
    image: string;
}

const ClickableImage = ({
    header,
    image,
}: ClickableImageData) => {
    return (
        <section>
            <div className="max-w-5xl mx-10 md:mx-auto flex flex-col items-left py-2">
                <a href={`/case-studies/${header}`} className="relative group">
                <img
                    src={image}
                    alt={header}
                    className="w-full transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 rounded" />
                </a>
            </div>
        </section>
    );
}

export default ClickableImage;