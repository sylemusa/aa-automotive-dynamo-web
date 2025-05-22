
import { Link } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ScrollAnimation from "../ScrollAnimation";

const UsedCarsCallout = () => {
  const words = [
    {
      text: "Finden",
    },
    {
      text: "Sie",
    },
    {
      text: "Ihr",
    },
    {
      text: "Traumauto",
    },
    {
      text: "bei",
    },
    {
      text: "AA Automobile",
      className: "text-aa-turquoise",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center">
            <p className="text-neutral-400 text-sm sm:text-base mb-2">
              Über 100 Qualitätsfahrzeuge zur Auswahl
            </p>
            
            <TypewriterEffectSmooth 
              words={words} 
              className="mb-6 text-white"
              cursorClassName="bg-aa-turquoise"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/dienstleistungen">
                <RainbowButton className="min-w-[200px]">
                  Gebrauchtwagen ansehen
                </RainbowButton>
              </Link>
              
              <Link to="/kontakt" className="btn-secondary">
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default UsedCarsCallout;
