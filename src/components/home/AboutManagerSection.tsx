
import { motion } from "framer-motion";
import { Award, Users, Car } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const AboutManagerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-aa-dark-gray/50 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Manager Image */}
          <ScrollAnimation>
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden glass-card-hover">
                <img src="/lovable-uploads/83518182-2d54-4077-9885-90d42beccb17.png" alt="Geschäftsführer AA-Automobile" className="w-full h-96 object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Manager Info */}
          <div className="space-y-6">
            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Unser <span className="text-aa-turquoise">Geschäftsführer</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-300 mb-6">Eyüp Senkarabacak</h3>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">Mit über 5 Jahren Erfahrung im Automobilhandel steht Eyüp Senkarabacak für Vertrauen, Kompetenz und erstklassigen Service. Seine Leidenschaft für Fahrzeuge und sein Engagement für Kundenzufriedenheit machen 
AA-Automobile zu Ihrem verlässlichen Partner beim Auto kaufen und verkaufen.</p>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-lg glass-card-hover text-center">
                  <Award className="text-aa-turquoise mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-white">5+ Jahre</h4>
                  <p className="text-gray-400 text-sm">Erfahrung</p>
                </div>
                <div className="glass-card p-4 rounded-lg glass-card-hover text-center">
                  <Users className="text-aa-turquoise mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-white">200+</h4>
                  <p className="text-gray-400 text-sm">Zufriedene Kunden</p>
                </div>
                <div className="glass-card p-4 rounded-lg glass-card-hover text-center">
                  <Car className="text-aa-turquoise mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-white">200+</h4>
                  <p className="text-gray-400 text-sm">Verkaufte Fahrzeuge</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManagerSection;
