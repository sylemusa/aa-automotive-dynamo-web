
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { 
  Car, ShoppingCart, RefreshCw, Truck, 
  CheckCircle, BarChart3, Euro, Users, Phone, Mail
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section - updated to match SwiftRooter style */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-aa-turquoise">AA Automobile</span> – Schnell & Zuverlässig
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mt-4 mb-6">
                  Ihr vertrauenswürdiger Partner für den Gebrauchtwagenverkauf
                </p>
                <p className="text-gray-600 mb-8">
                  Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung. 
                  Unsere Experten stehen Ihnen mit jahrelanger Erfahrung und Leidenschaft für Autos zur Seite.
                </p>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Users className="text-aa-turquoise" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Car className="text-aa-turquoise" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Euro className="text-aa-turquoise" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">10+ Jahre Erfahrung</h3>
                  <p className="text-gray-600">Im Automobilhandel</p>
                </div>
              </motion.div>
            </div>

            {/* Hero Right Content - Image and Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6 relative"
              >
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
                    alt="AA Automobile Dealership" 
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Termin vereinbaren</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-aa-turquoise hover:bg-aa-turquoise/90">
                    Rückruf anfordern
                  </Button>
                </form>
                <div className="mt-4 flex items-center gap-2 justify-center">
                  <Phone size={16} className="text-aa-turquoise" />
                  <span className="text-gray-700">Oder rufen Sie uns an: <a href="tel:+49123456789" className="text-aa-turquoise font-semibold">+49 123 456 789</a></span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;
