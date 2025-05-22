
import { Link } from 'react-router-dom';
import ScrollAnimation from '../ScrollAnimation';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bereit, den nächsten Schritt zu gehen?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns jetzt für eine unverbindliche Beratung oder vereinbaren Sie einen Termin zur Besichtigung.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/kontakt" className="btn-primary">
              Kontakt aufnehmen
            </Link>
            <Link to="/dienstleistungen" className="btn-secondary">
              Mehr über unsere Dienstleistungen
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTASection;
