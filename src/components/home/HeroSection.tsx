
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Users, Car, Euro, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroFormData {
  name: string;
  email: string;
  phone: string;
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<HeroFormData>({
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
  );
};

export default HeroSection;
