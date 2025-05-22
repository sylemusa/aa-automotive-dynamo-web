
import { Link } from 'react-router-dom';
import { 
  Users, Shield, Clock, ArrowRight
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="section-title text-center">Über AA Automobile</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Lernen Sie uns kennen – ein Familienbetrieb mit Leidenschaft für Autos und echtem Engagement für unsere Kunden.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80"
                    alt="AA Automobile Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-aa-turquoise p-4 rounded-lg text-white">
                  <p className="font-semibold">Über 10 Jahre</p>
                  <p>Erfahrung</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Über AA Automobile – Vertrauen durch Erfahrung
                </h2>
                <p className="text-gray-300 mb-6">
                  Als Familienbetrieb mit über 10 Jahren Erfahrung verbinden wir unsere Leidenschaft für Autos mit echter Kundenorientierung. Wir verstehen, dass der Kauf oder Verkauf eines Fahrzeugs eine wichtige Entscheidung ist, und begleiten Sie kompetent durch diesen Prozess.
                </p>
                <p className="text-gray-300 mb-8">
                  Unser Ziel ist es, langfristige Kundenbeziehungen aufzubauen, die auf Vertrauen und Zufriedenheit basieren. Viele unserer Kunden kommen immer wieder zu uns zurück oder empfehlen uns an Freunde und Familie weiter – darauf sind wir besonders stolz.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-aa-dark-gray p-2 rounded-full text-aa-turquoise mr-4 mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Persönliche Beratung</h3>
                      <p className="text-gray-400">
                        Wir nehmen uns Zeit für Ihre Anliegen und beraten Sie individuell und bedarfsgerecht.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-aa-dark-gray p-2 rounded-full text-aa-turquoise mr-4 mt-1">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Geprüfte Qualität</h3>
                      <p className="text-gray-400">
                        Jedes Fahrzeug wird von uns gründlich geprüft und mit transparenter Historie angeboten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-aa-dark-gray p-2 rounded-full text-aa-turquoise mr-4 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Flexible & schnelle Abwicklung</h3>
                      <p className="text-gray-400">
                        Wir sorgen für eine unkomplizierte Abwicklung ohne bürokratische Hürden.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/dienstleistungen" className="btn-primary inline-flex items-center">
                  Mehr erfahren <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-aa-dark-gray to-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="section-title text-center">Unser Team</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Lernen Sie die Menschen kennen, die AA Automobile zu dem machen, was es ist. Ein Team aus Autoliebhabern mit Leidenschaft für exzellenten Service.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation delay={300}>
              <div className="bg-aa-dark-gray rounded-xl overflow-hidden card-hover">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="Max Mustermann" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Max Mustermann</h3>
                  <p className="text-aa-turquoise mb-4">Gründer & Geschäftsführer</p>
                  <p className="text-gray-400">
                    Über 15 Jahre Erfahrung in der Automobilbranche. Setzt sich persönlich für jeden Kunden ein.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <div className="bg-aa-dark-gray rounded-xl overflow-hidden card-hover">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Lisa Wagner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Lisa Wagner</h3>
                  <p className="text-aa-turquoise mb-4">Kundenberaterin</p>
                  <p className="text-gray-400">
                    Findet für jeden Kunden das passende Fahrzeug. Bekannt für ihre ehrliche und freundliche Beratung.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={500}>
              <div className="bg-aa-dark-gray rounded-xl overflow-hidden card-hover">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    alt="Thomas Weber" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Thomas Weber</h3>
                  <p className="text-aa-turquoise mb-4">Technischer Experte</p>
                  <p className="text-gray-400">
                    Ehemaliger KFZ-Meister mit Auge fürs Detail. Prüft jedes Fahrzeug auf Herz und Nieren.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="section-title text-center">Unsere Werte</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln und definieren, wer wir als Unternehmen sind.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollAnimation delay={300}>
              <div className="bg-aa-dark-gray p-8 rounded-xl card-hover">
                <h3 className="text-2xl font-semibold text-white mb-4">Ehrlichkeit & Transparenz</h3>
                <p className="text-gray-300">
                  Wir glauben an eine offene Kommunikation und vollständige Transparenz bei allen Fahrzeuginformationen. Unsere Kunden sollen genau wissen, was sie kaufen – keine versteckten Mängel, keine Überraschungen.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <div className="bg-aa-dark-gray p-8 rounded-xl card-hover">
                <h3 className="text-2xl font-semibold text-white mb-4">Kundenorientierung</h3>
                <p className="text-gray-300">
                  Ihre Zufriedenheit steht für uns an erster Stelle. Wir hören zu, verstehen Ihre Bedürfnisse und bieten maßgeschneiderte Lösungen, die zu Ihnen passen.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={500}>
              <div className="bg-aa-dark-gray p-8 rounded-xl card-hover">
                <h3 className="text-2xl font-semibold text-white mb-4">Fairness</h3>
                <p className="text-gray-300">
                  Faire Preise für Käufer und Verkäufer sind uns wichtig. Wir streben nach Win-Win-Situationen, bei denen alle Beteiligten zufrieden sind.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={600}>
              <div className="bg-aa-dark-gray p-8 rounded-xl card-hover">
                <h3 className="text-2xl font-semibold text-white mb-4">Qualität & Zuverlässigkeit</h3>
                <p className="text-gray-300">
                  Wir stehen zu unserem Wort und liefern, was wir versprechen. Qualität bei Fahrzeugen und Service ist für uns selbstverständlich.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lernen Sie uns persönlich kennen
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Vereinbaren Sie einen unverbindlichen Termin für ein persönliches Gespräch in unserem Autohaus.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <Link to="/kontakt" className="btn-primary">
              Termin vereinbaren
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
