import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WorkShowcaseProps {
  image: string;
  category: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const WorkShowcase: React.FC<WorkShowcaseProps> = ({
  image,
  category,
  title,
  description,
  buttonText = "View work →",
  onButtonClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-start sm:justify-end p-10 sm:p-16">
            <img
              className="rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 max-w-full h-auto object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col justify-end p-10 pt-0 sm:p-16">
            <h3 className="text-base font-sans text-gray-600 font-medium mb-1">
              {category}
            </h3>
            <h3 className="text-3xl font-sans text-gray-600 font-semibold mb-5 sm:mb-8">
              {title}
            </h3>
            <p className="text-base sm:text-lg font-sans text-gray-600 font-normal">
              {description}
            </p>
            {onButtonClick && (
              <button
                onClick={onButtonClick}
                className="rounded-3xl p-3 px-12 bg-stone-800 text-white w-fit mt-10 hover:bg-sky-200 hover:text-black"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default WorkShowcase;
