
import { CheckCircle, Car, Euro } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-aa-dark-gray/50 to-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            Warum <span className="text-aa-turquoise">AA Automobile</span>?
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile, die uns zu Ihrem vertrauenswürdigen Partner beim Autokauf machen.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ScrollAnimation delay={300}>
            <div className="glass-card p-6 rounded-lg glass-card-hover text-center">
              <CheckCircle className="text-aa-turquoise mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-3">Geprüfte Qualität</h3>
              <p className="text-gray-400">
                Alle unsere Fahrzeuge werden sorgfältig geprüft und sind in einwandfreiem Zustand.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={400}>
            <div className="glass-card p-6 rounded-lg glass-card-hover text-center">
              <Euro className="text-aa-turquoise mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-3">Faire Preise</h3>
              <p className="text-gray-400">
                Transparente Preisgestaltung ohne versteckte Kosten - fair für Käufer und Verkäufer.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={500}>
            <div className="glass-card p-6 rounded-lg glass-card-hover text-center">
              <Car className="text-aa-turquoise mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-3">Umfassender Service</h3>
              <p className="text-gray-400">
                Von der Beratung bis zur Übergabe - wir begleiten Sie durch den gesamten Prozess.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
