
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { 
  Car, ShoppingCart, RefreshCw, Truck, 
  CheckCircle, BarChart3, Euro
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          
          {/* Background image */}
          <img 
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
            alt="AA Automobile Dealership" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                AA Automobile – Schnell & Zuverlässig beim Gebrauchtwagenverkauf
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/kontakt" className="btn-primary">
                Jetzt Termin vereinbaren
              </Link>
              <Link to="/kontakt" className="btn-secondary">
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="section-title text-center">Unsere Dienstleistungen</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Wir bieten Ihnen erstklassige Dienstleistungen rund um Ihr Fahrzeug an. Profitieren Sie von unserer Erfahrung und unserem Engagement.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollAnimation delay={300}>
              <ServiceCard 
                title="Auto kaufen" 
                description="Geprüfte Fahrzeuge, fair & sicher."
                icon={<Car size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <ServiceCard 
                title="Auto verkaufen" 
                description="Schnell, transparent, direkt."
                icon={<ShoppingCart size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={500}>
              <ServiceCard 
                title="Autovermittlung" 
                description="Wir holen das Beste für Sie raus."
                icon={<RefreshCw size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={600}>
              <ServiceCard 
                title="Fahrzeugüberführung" 
                description="Sicher ans Ziel, stressfrei."
                icon={<Truck size={32} />}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Trust Section with Testimonials */}
      <section className="py-20 bg-gradient-to-b from-aa-turquoise/20 to-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="section-title text-center">
              Vertrauenswürdiger Gebrauchtwagenhandel mit Herz
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Unsere zufriedenen Kunden sprechen für uns. Wir sind stolz auf unseren Ruf für Ehrlichkeit, Fairness und exzellenten Service.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollAnimation delay={300}>
              <TestimonialCard 
                name="Michael Becker"
                testimonial="Absolut empfehlenswert! Faire Preise und eine sehr persönliche Beratung. Mein neuer Gebrauchtwagen läuft einwandfrei."
                image="https://randomuser.me/api/portraits/men/32.jpg"
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <TestimonialCard 
                name="Laura Schmidt"
                testimonial="Schnelle und unkomplizierte Abwicklung beim Verkauf meines alten Autos. Der Preis war besser als bei allen anderen Händlern!"
                image="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={500}>
              <TestimonialCard 
                name="Thomas Müller"
                testimonial="Kompetente Beratung und kein Druck beim Kauf. Man merkt, dass hier Autofans am Werk sind, die wissen, wovon sie sprechen."
                image="https://randomuser.me/api/portraits/men/67.jpg"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollAnimation>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-aa-dark-gray flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Persönlich & ehrlich</h3>
                <p className="text-gray-400">
                  Wir legen Wert auf eine transparente und ehrliche Beratung ohne Verkaufsdruck. Ihre Zufriedenheit steht für uns an erster Stelle.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-aa-dark-gray flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                  <Car size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Geprüfte Fahrzeuge</h3>
                <p className="text-gray-400">
                  Jedes unserer Fahrzeuge durchläuft eine gründliche Inspektion. Sie erhalten alle relevanten Informationen zur Fahrzeughistorie.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-aa-dark-gray flex items-center justify-center mx-auto mb-6 text-aa-turquoise">
                  <Euro size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Faire Preise & schnelle Abwicklung</h3>
                <p className="text-gray-400">
                  Transparente Preisgestaltung ohne versteckte Kosten. Wir garantieren eine reibungslose und zügige Kaufabwicklung.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit, den nächsten Schritt zu gehen?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
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
    </div>
  );
};

export default Home;
