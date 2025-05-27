import { Link } from 'react-router-dom';
import { Car, ShoppingCart, RefreshCw, Truck, CheckCircle, Shield, PhoneCall, Users, Euro } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="section-title text-center">Unsere Dienstleistungen</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Entdecken Sie unser komplettes Angebot an professionellen Dienstleistungen rund um den Kauf und Verkauf von Fahrzeugen.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Service 1: Auto kaufen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollAnimation>
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-aa-turquoise/20 text-aa-turquoise p-2 rounded-lg mb-4">
                  <Car size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Auto kaufen – inklusive Beratung
                </h2>
                <p className="text-gray-300 mb-6">
                  Bei AA-Automobile finden Sie eine ausgewählte Palette geprüfter Gebrauchtwagen aller Marken und Preisklassen. Jedes Fahrzeug wird vor dem Verkauf einer gründlichen technischen Inspektion unterzogen.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Umfassende Fahrzeuguntersuchung vor dem Verkauf</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Transparente Fahrzeughistorie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Persönliche Beratung und ausführliche Probefahrten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Attraktive Finanzierungsangebote</span>
                  </li>
                </ul>
                
                <a href="tel:+436601907710" className="btn-primary inline-flex items-center">
                  Jetzt anrufen <PhoneCall size={16} className="ml-2" />
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300} className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800&h=600" alt="Auto kaufen bei AA-Automobile" className="w-full h-full object-cover" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Service 2: Auto verkaufen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollAnimation delay={300} className="order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&h=600" alt="Auto verkaufen bei AA-Automobile" className="w-full h-full object-cover" />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="order-2">
              <div>
                <div className="inline-block bg-aa-turquoise/20 text-aa-turquoise p-2 rounded-lg mb-4">
                  <ShoppingCart size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Auto verkaufen – mit Sofortbewertung
                </h2>
                <p className="text-gray-300 mb-6">
                  Verkaufen Sie Ihr Fahrzeug schnell, einfach und zu fairen Konditionen. Wir bieten eine transparente Bewertung und Sofortkauf ohne versteckte Kosten oder Gebühren.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Kostenlose und unverbindliche Fahrzeugbewertung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Sofortige Auszahlung des Kaufpreises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Kostenlose Abmeldung des Fahrzeugs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Abholung des Fahrzeugs möglich</span>
                  </li>
                </ul>
                
                <a href="tel:+436601907710" className="btn-primary inline-flex items-center">
                  Jetzt anrufen <PhoneCall size={16} className="ml-2" />
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Service 3: Autovermittlung */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollAnimation className="order-2 lg:order-1">
              <div>
                <div className="inline-block bg-aa-turquoise/20 text-aa-turquoise p-2 rounded-lg mb-4">
                  <RefreshCw size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Autovermittlung – für den besten Preis
                </h2>
                <p className="text-gray-300 mb-6">
                  Suchen Sie ein bestimmtes Fahrzeug, das wir aktuell nicht im Bestand haben? Oder möchten Sie Ihr Fahrzeug zum bestmöglichen Preis verkaufen? Unser Vermittlungsservice findet die optimale Lösung.
                </p>
                
                <ul className="space-y-3 mb-8">
                  
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Bestpreisermittlung beim Verkauf</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Umfangreiches Netzwerk an Händlern und Privatverkäufern</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Volle Transparenz und regelmäßige Updates</span>
                  </li>
                </ul>
                
                <a href="tel:+436601907710" className="btn-primary inline-flex items-center">
                  Jetzt anrufen <PhoneCall size={16} className="ml-2" />
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300} className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img alt="Autovermittlung bei AA-Automobile" className="w-full h-full object-cover" src="/lovable-uploads/65746b57-431f-426d-93fb-e5a84b1243b9.png" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Service 4: Fahrzeugüberführung */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={300} className="order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img alt="Fahrzeugüberführung durch AA-Automobile" className="w-full h-full object-cover" src="/lovable-uploads/40a64592-a92f-40bc-9d67-2c0a16ebad3f.png" />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="order-2">
              <div>
                <div className="inline-block bg-aa-turquoise/20 text-aa-turquoise p-2 rounded-lg mb-4">
                  <Truck size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Fahrzeugüberführung – sicher & bequem
                </h2>
                <p className="text-gray-300 mb-6">
                  Wir übernehmen die sichere Überführung Ihres Fahrzeugs an jeden gewünschten Ort in Deutschland. Professionell, zuverlässig und versichert.
                </p>
                
                <ul className="space-y-3 mb-8">
                  
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Vollständig versichert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Termingerechte Lieferung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Kurzzeitkennzeichen inklusive</span>
                  </li>
                </ul>
                
                <a href="tel:+436601907710" className="btn-primary inline-flex items-center">
                  Jetzt anrufen <PhoneCall size={16} className="ml-2" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-aa-dark-gray to-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="section-title text-center">Warum AA-Automobile wählen?</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Wir bieten Ihnen mehr als nur den Kauf oder Verkauf von Fahrzeugen. Entdecken Sie die Vorteile, die uns auszeichnen.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation delay={300}>
              <div className="bg-aa-dark-gray p-6 rounded-xl card-hover">
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 text-aa-turquoise">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Qualitätsgarantie</h3>
                <p className="text-gray-400">
                  Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft und getestet, um höchste Qualitätsstandards zu garantieren.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <div className="bg-aa-dark-gray p-6 rounded-xl card-hover">
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 text-aa-turquoise">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Persönlicher Service</h3>
                <p className="text-gray-400">
                  Bei uns sind Sie kein anonymer Kunde. Wir bieten individuelle Beratung und maßgeschneiderte Lösungen.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={500}>
              <div className="bg-aa-dark-gray p-6 rounded-xl card-hover">
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 text-aa-turquoise">
                  <Euro size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Faire Preisgestaltung</h3>
                <p className="text-gray-400">
                  Transparente Preise ohne versteckte Kosten. Wir bieten ein ausgezeichnetes Preis-Leistungs-Verhältnis.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit, mit uns zusammenzuarbeiten?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Kontaktieren Sie uns jetzt für eine unverbindliche Beratung oder um einen Termin zu vereinbaren.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <a href="tel:+436601907710" className="btn-primary inline-flex items-center">
              Jetzt anrufen <PhoneCall size={16} className="ml-2" />
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
