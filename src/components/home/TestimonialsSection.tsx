
import { TestimonialsSection as MarqueeTestimonials } from '@/components/ui/testimonials-with-marquee';

const TestimonialsSection = () => {
  const testimonials = [
    {
      author: {
        name: "Michael Becker",
        handle: "Zufriedener Kunde",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      text: "Absolut empfehlenswert! Faire Preise und eine sehr persönliche Beratung. Mein neuer Gebrauchtwagen läuft einwandfrei."
    },
    {
      author: {
        name: "Laura Schmidt",
        handle: "Zufriedene Kundin",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      text: "Schnelle und unkomplizierte Abwicklung beim Verkauf meines alten Autos. Der Preis war besser als bei allen anderen Händlern!"
    },
    {
      author: {
        name: "Thomas Müller",
        handle: "Autofan",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      text: "Kompetente Beratung und kein Druck beim Kauf. Man merkt, dass hier Autofans am Werk sind, die wissen, wovon sie sprechen."
    }
  ];

  return (
    <MarqueeTestimonials
      title="Vertrauenswürdiger Gebrauchtwagenhandel mit Herz"
      description="Unsere zufriedenen Kunden sprechen für uns. Wir sind stolz auf unseren Ruf für Ehrlichkeit, Fairness und exzellenten Service."
      testimonials={testimonials}
      className="bg-[#0A0A0E] relative"
    />
  );
};

export default TestimonialsSection;
