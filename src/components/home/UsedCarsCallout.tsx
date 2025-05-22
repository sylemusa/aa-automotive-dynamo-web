
import { Link } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ScrollAnimation from "../ScrollAnimation";

const UsedCarsCallout = () => {
  const words = [{
    text: "Finden"
  }, {
    text: "Sie"
  }, {
    text: "Ihr"
  }, {
    text: "Traumauto"
  }, {
    text: "bei"
  }, {
    text: "AA Automobile",
    className: "text-aa-turquoise font-bold"
  }];
  
  return (
    <ScrollAnimation className="py-20 relative bg-gradient-to-b from-black to-aa-dark-gray/80">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <TypewriterEffectSmooth words={words} className="justify-center" />
        </div>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Unser sorgfältig ausgewähltes Angebot an Gebrauchtwagen bietet für jeden Bedarf das passende Fahrzeug. Entdecken Sie jetzt Ihre neuen Traumwagen!
        </p>
        
        <Link to="/fahrzeuge">
          <RainbowButton>
            Fahrzeuge ansehen
          </RainbowButton>
        </Link>
      </div>
    </ScrollAnimation>
  );
};

export default UsedCarsCallout;
