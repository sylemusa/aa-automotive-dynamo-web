
import { CheckCircle, Car, Euro } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-aa-dark-gray/50 to-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Warum <span className="text-aa-turquoise">AA Automobile</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ihre Vorteile auf einen Blick
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimation delay={200}>
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-center">
              <CheckCircle className="text-aa-turquoise mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Geprüfte Qualität</h3>
              <p className="text-gray-400">
                Alle Fahrzeuge werden von unseren Experten sorgfältig geprüft und aufbereitet.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-center">
              <Euro className="text-aa-turquoise mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Faire Preise</h3>
              <p className="text-gray-400">
                Transparente Preisgestaltung ohne versteckte Kosten - bei Kauf und Verkauf.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-center">
              <Car className="text-aa-turquoise mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Große Auswahl</h3>
              <p className="text-gray-400">
                Umfassendes Sortiment an hochwertigen Gebrauchtwagen verschiedener Marken.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
