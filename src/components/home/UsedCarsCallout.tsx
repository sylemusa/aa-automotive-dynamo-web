
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
    <ScrollAnimation>
      <div className="bg-gradient-to-b from-black to-aa-dark-gray py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <TypewriterEffectSmooth 
              words={words} 
              className="text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold"
              cursorClassName="bg-aa-turquoise h-12 xl:h-16"
            />
          </div>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mt-8 mb-10 bg-gradient-to-r from-white via-white to-aa-turquoise bg-clip-text text-transparent">
            Entdecken Sie unser vielfältiges Angebot an qualitativ hochwertigen Gebrauchtwagen. 
            Bei uns finden Sie garantiert das perfekte Fahrzeug für Ihre Bedürfnisse.
          </p>
          
          <Link to="/gebrauchtwagen">
            <RainbowButton className="text-lg px-10 py-5 font-bold">
              Gebrauchtwagen entdecken
            </RainbowButton>
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default UsedCarsCallout;
