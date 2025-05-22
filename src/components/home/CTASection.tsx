
import { Link } from 'react-router-dom';
import ScrollAnimation from '../ScrollAnimation';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-aa-dark-gray/80 to-black relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"%3E%3Cpath d=\"M11 18h1v1H11V18zm2-2h1v1H13V16zm2-2h1v1H15V14zm2-2h1v1H17V12zm2-2h1v1H19V10zm2-2h1v1H21V8zm2-2h1v1H23V6zm2-2h1v1H25V4zm2-2h1v1H27V2zm2-2h1v1H29V0zm0 18h1v1H29V18zm-2 2h1v1H27V20zm-2 2h1v1H25V22zm-2 2h1v1H23V24zm-2 2h1v1H21V26zm-2 2h1v1H19V28zm-2 2h1v1H17V30zm-2 2h1v1H15V32zm-2 2h1v1H13V34zm-2 2h1v1H11V36z\" fill=\"%2341B6E6\" fill-opacity=\".1\"%3E%3C/path%3E%3C/svg%3E')] opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Bereit, den nächsten Schritt zu gehen?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
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
