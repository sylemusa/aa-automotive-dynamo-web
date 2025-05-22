
import { CheckCircle, Car, Euro } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ScrollAnimation>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-aa-turquoise/10 flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Persönlich & ehrlich</h3>
              <p className="text-gray-600">
                Wir legen Wert auf eine transparente und ehrliche Beratung ohne Verkaufsdruck. Ihre Zufriedenheit steht für uns an erster Stelle.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-aa-turquoise/10 flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                <Car size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Geprüfte Fahrzeuge</h3>
              <p className="text-gray-600">
                Jedes unserer Fahrzeuge durchläuft eine gründliche Inspektion. Sie erhalten alle relevanten Informationen zur Fahrzeughistorie.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={400}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-aa-turquoise/10 flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                <Euro size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Faire Preise & schnelle Abwicklung</h3>
              <p className="text-gray-600">
                Transparente Preisgestaltung ohne versteckte Kosten. Wir garantieren eine reibungslose und zügige Kaufabwicklung.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
