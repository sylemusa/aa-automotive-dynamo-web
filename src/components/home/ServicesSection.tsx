
import { Car, ShoppingCart, RefreshCw, Truck } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 dark-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\"%3E%3Cpath d=\"M1 3h1v1H1V3zm2-2h1v1H3V1z\" fill=\"white\" fill-opacity=\".5\"%3E%3C/path%3E%3C/svg%3E')"}}></div>
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation>
          <h2 className="section-title text-center gradient-text">Unsere Dienstleistungen</h2>
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
  );
};

export default ServicesSection;
