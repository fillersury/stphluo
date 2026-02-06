import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageSlideSectionData {
    header: string;
    image: string;
}

const ImageSlideSection = ({
    header,
    image,
}: ImageSlideSectionData) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0 });
    
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-5xl mx-auto flex flex-col items-left">
                {image && (
                    <img
                        src={image}
                        alt={header}
                        className="py-6 md:py-10 h-auto max-w-full"
                    />
                )}
            </div>
        </motion.section>
    )
}

export default ImageSlideSection;