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
                <a href={`/case-studies/${header}`}>
                <img
                    src={image}
                    alt={header}
                    className="w-full"
                />      
                </a>          
            </div>
        </section>
    )
}

export default ClickableImage;