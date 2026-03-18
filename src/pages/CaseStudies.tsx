import ClickableImage from "../components/projectSections/ClickableImage";
import aevia from "../assets/aevia.avif";
import cavaMat from "../assets/cavaMat.avif";
import babylon from "../assets/babylon.avif";
import oebabCat from "../assets/oebabCat.avif";
import linq from "../assets/linq.avif";

interface CaseStudiesProps {
  onNavigate: (path: string) => void;
}

const caseStudies = [
  { header: "aevia", image: aevia },
  { header: "cava-mat", image: cavaMat },
  { header: "babylon", image: babylon },
  { header: "oebab-cat", image: oebabCat },
  { header: "linq", image: linq },
];

function CaseStudies({ onNavigate: _onNavigate }: CaseStudiesProps) {
  return (
    <div>
      {caseStudies.map((study) => (
        <section key={study.header}>
          <ClickableImage header={study.header} image={study.image} />
        </section>
      ))}
    </div>
  );
}

export default CaseStudies;
