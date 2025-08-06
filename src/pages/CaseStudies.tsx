import React, { useState, useEffect } from "react";
import { useTypedText } from "../hooks/useTypedText";

import ClickableImage from "../components/projectSections/ClickableImage";

import aevia from "../assets/aevia.avif";
import cavaMat from "../assets/cavaMat.avif";
import babylon from "../assets/babylon.avif";
import oebabCat from "../assets/oebabCat.avif";
import linq from "../assets/linq.avif";

interface CaseStudiesProps {
  onNavigate: (path: string) => void;
}

function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const typed = useTypedText(["a product", "an app", "a web", "an industrial"], 150, 1000);

  return (
    <div>
      <section>
        <ClickableImage
          header="aevia"
          image={aevia}
        />
      </section>
      <section>
        <ClickableImage
          header="cava-mat"
          image={cavaMat}
        />
      </section>
      <section>
        <ClickableImage
          header="babylon"
          image={babylon}
        />
      </section>
      <section>
        <ClickableImage
          header="oebab-cat"
          image={oebabCat}
        />
      </section>
      <section>
        <ClickableImage
          header="linq"
          image={linq}
        />
      </section>
    </div>
  );
}

export default CaseStudies;