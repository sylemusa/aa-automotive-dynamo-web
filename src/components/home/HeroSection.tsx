import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Users, Car, Euro, Phone, MapPin } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative bg-transparent">
      {/* Background Image - Full height */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mercedes S-Class" className="w-full h-full object-cover brightness-[0.8]" />
        {/* Darker gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      </div>
      
      {/* Hero Main Content - Increased padding top and bottom */}
      <div className="container mx-auto px-4 pt-40 pb-24 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 text-white">
            <div className="text-aa-turquoise">Willkommen bei</div>
            <div className="text-gray-50"><span className="text-aa-turquoise">AA</span>-Automobile</div>
          </h1>
          
          {/* Separated subtitle with gradient text styling */}
          <p className="text-3xl md:text-4xl mt-1 mb-4 gradient-text font-bold">
            Schnell & Zuverlässig
          </p>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ihr vertrauenswürdiger Partner für den Gebrauchtwagenverkauf. Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} className="flex items-center justify-center gap-6 mb-8">
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
            <h3 className="text-xl font-bold text-white">Umfangreiche Erfahrung</h3>
            <p className="text-white/80 text-left">Im Automobilhandel</p>
          </div>
        </motion.div>
        
        {/* Simple 2-Field Contact Information */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.6
      }} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {/* Address Field */}
            <div className="glass-card p-4 rounded-lg flex flex-col items-center text-center hover:shadow-[0_0_15px_rgba(65,182,230,0.3)] transition-all duration-300">
              <MapPin className="w-6 h-6 text-aa-turquoise mb-2" />
              <p className="text-white text-sm leading-tight">
                Gewerbestr. 4<br />
                4072 Alkoven
              </p>
            </div>
            
            {/* Phone Field */}
            <div className="glass-card p-4 rounded-lg flex flex-col items-center text-center hover:shadow-[0_0_15px_rgba(65,182,230,0.3)] transition-all duration-300">
              <Phone className="w-6 h-6 text-aa-turquoise mb-2" />
              <a href="tel:+4366019077710" className="text-white text-sm hover:text-aa-turquoise transition-colors">
                +43 660 1907710
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;