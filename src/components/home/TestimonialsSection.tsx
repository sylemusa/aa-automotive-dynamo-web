
import ScrollAnimation from '../ScrollAnimation';
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#0A0A0E] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aa-turquoise/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation>
          <h2 className="section-title text-center">
            <span className="gradient-text">Vertrauenswürdiger Gebrauchtwagenhandel mit Herz</span>
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
  );
};

export default TestimonialsSection;
