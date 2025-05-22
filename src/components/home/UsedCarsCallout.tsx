
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
    className: "text-aa-turquoise"
  }];
  
  return (
    <ScrollAnimation>
      <div className="bg-gradient-to-b from-black to-aa-dark-gray py-20 px-4">
        <div className="container mx-auto text-center">
          <TypewriterEffectSmooth words={words} />
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mt-6 mb-8">
            Entdecken Sie unser vielfältiges Angebot an qualitativ hochwertigen Gebrauchtwagen. 
            Bei uns finden Sie garantiert das perfekte Fahrzeug für Ihre Bedürfnisse.
          </p>
          
          <Link to="/gebrauchtwagen">
            <RainbowButton className="text-lg px-8 py-4">
              Gebrauchtwagen entdecken
            </RainbowButton>
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default UsedCarsCallout;
