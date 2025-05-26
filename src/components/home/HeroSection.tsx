
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Users, Car, Euro, Phone, MapPin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-transparent">
      {/* Background Image - Full height */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Mercedes S-Class" 
          className="w-full h-full object-cover brightness-[0.8]" 
        />
        {/* Darker gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      </div>
      
      {/* Hero Main Content - Increased padding top and bottom */}
      <div className="container mx-auto px-4 pt-40 pb-24 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 text-white">
            <div className="text-aa-turquoise">Wilkommen bei</div>
            <div><span className="text-aa-turquoise">AA</span> Automobile</div>
          </h1>
          
          {/* Separated subtitle with gradient text styling */}
          <p className="text-3xl md:text-4xl mt-1 mb-4 gradient-text font-bold"> Schnell & Zuverlässig</p>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ihr vertrauenswürdiger Partner für den Gebrauchtwagenverkauf. Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Users className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Car className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Euro className="text-aa-turquoise" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">5+ Jahre Erfahrung</h3>
            <p className="text-white/80">Im Automobilhandel</p>
          </div>
        </motion.div>
        
        {/* Contact Information Card - Smaller and more elegant */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-xl mx-auto glass-card rounded-lg p-4 glass-card-hover"
        >
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-white mb-1">Kontaktieren Sie uns</h3>
            <p className="text-white/80 text-sm">Besuchen Sie uns oder rufen Sie an!</p>
          </div>
          
          <div className="space-y-3">
            {/* Address */}
            <div className="flex items-center gap-3 bg-black/20 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-aa-turquoise/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-aa-turquoise" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-sm mb-1">Unser Standort</h4>
                <p className="text-white/90 text-sm">
                  Gewerbestr. 4, 4072 Alkoven, Österreich
                </p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-3 bg-black/20 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-aa-turquoise/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-aa-turquoise" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-sm mb-1">Telefon</h4>
                <a href="tel:+4366019077710" className="text-aa-turquoise hover:text-aa-turquoise/80 transition-colors text-sm">
                  +43 660 1907710
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3 bg-black/20 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-aa-turquoise/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-aa-turquoise" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-sm mb-1">E-Mail</h4>
                <a href="mailto:office@aa-automobile.at" className="text-aa-turquoise hover:text-aa-turquoise/80 transition-colors text-sm">
                  office@aa-automobile.at
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
