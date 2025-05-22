
import { Car, ShoppingCart, RefreshCw, Truck } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
