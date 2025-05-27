
import { CheckCircle, Car, Euro } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const FeaturesSection = () => {
  return (
    <ScrollAnimation>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Warum <span className="text-aa-turquoise">AA-Automobile</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Vertrauen Sie auf unsere Expertise und profitieren Sie von unseren einzigartigen Vorteilen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <CheckCircle className="w-12 h-12 text-aa-turquoise mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Geprüfte Qualität</h3>
              <p className="text-gray-300">
                Alle Fahrzeuge werden von unseren Experten gründlich geprüft und aufbereitet
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Car className="w-12 h-12 text-aa-turquoise mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Große Auswahl</h3>
              <p className="text-gray-300">
                Vielfältiges Angebot an hochwertigen Gebrauchtwagen aller Marken und Klassen
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Euro className="w-12 h-12 text-aa-turquoise mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Faire Preise</h3>
              <p className="text-gray-300">
                Transparente und faire Preisgestaltung sowohl beim Kauf als auch beim Verkauf
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default FeaturesSection;
