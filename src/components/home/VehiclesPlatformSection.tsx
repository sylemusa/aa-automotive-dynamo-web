
import { motion } from "framer-motion";
import { ExternalLink, Car, Search, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollAnimation from '../ScrollAnimation';

const VehiclesPlatformSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-aa-dark-gray/30 to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#41B6E6_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entdecken Sie unsere <span className="text-aa-turquoise">Gebrauchtwagen</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Schauen Sie sich unser aktuelles Angebot an hochwertigen Gebrauchtwagen an. 
              Alle Fahrzeuge sind geprüft, gepflegt und warten auf Sie!
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ScrollAnimation delay={300}>
            <div className="glass-card p-6 rounded-xl glass-card-hover text-center">
              <Search className="text-aa-turquoise mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-3">Große Auswahl</h3>
              <p className="text-gray-400">
                Über 50 geprüfte Gebrauchtwagen verschiedener Marken und Modelle
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="glass-card p-6 rounded-xl glass-card-hover text-center">
              <Star className="text-aa-turquoise mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-3">Geprüfte Qualität</h3>
              <p className="text-gray-400">
                Jedes Fahrzeug wird gründlich geprüft und aufbereitet
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={500}>
            <div className="glass-card p-6 rounded-xl glass-card-hover text-center">
              <Car className="text-aa-turquoise mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-3">Faire Preise</h3>
              <p className="text-gray-400">
                Transparente Preisgestaltung ohne versteckte Kosten
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={600}>
          <div className="text-center">
            <div className="glass-card inline-block p-8 rounded-2xl glass-card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besuchen Sie unsere Fahrzeug-Plattform
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Durchstöbern Sie unser komplettes Angebot an Gebrauchtwagen mit 
                detaillierten Informationen, Bildern und Preisen.
              </p>
              <Button 
                className="bg-aa-turquoise hover:bg-aa-turquoise/80 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(65,182,230,0.5)] hover:scale-105"
                onClick={() => window.open('https://your-vehicle-platform.com', '_blank')}
              >
                <ExternalLink className="mr-2" size={20} />
                Zu unseren Fahrzeugen
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default VehiclesPlatformSection;
