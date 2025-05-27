
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
    },
    {
      author: {
        name: "Sabine Weber",
        handle: "Neuwagenkäuferin",
        avatar: "https://randomuser.me/api/portraits/women/54.jpg"
      },
      text: "Nach schlechten Erfahrungen mit anderen Händlern bin ich hier endlich richtig beraten worden. Transparente Kommunikation und ehrliche Preise."
    },
    {
      author: {
        name: "Klaus Hoffmann",
        handle: "Stammkunde",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      text: "Bereits zum dritten Mal ein Auto hier gekauft. Das spricht wohl für sich! Bin jedes Mal zufrieden mit Service und Fahrzeug."
    },
    {
      author: {
        name: "Julia Krause",
        handle: "Erstkäuferin",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg"
      },
      text: "Als Fahranfängerin war ich unsicher, welches Auto zu mir passt. Die Beratung war geduldig und passgenau - jetzt habe ich mein Traumauto!"
    }
  ];

  return (
    <MarqueeTestimonials
      title="Mehr als nur ein Autohändler"
      description="Unsere zufriedenen Kunden sprechen für uns. Wir sind stolz auf unseren Ruf für Ehrlichkeit, Fairness und exzellenten Service."
      testimonials={testimonials}
      className="bg-[#0A0A0E] relative"
    />
  );
};

export default TestimonialsSection;
