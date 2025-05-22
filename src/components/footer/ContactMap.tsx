
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.39582008111!2d14.006144600000002!3d48.22607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774cfd9b293ed79%3A0xf47db28070ce3c0a!2sGewerbestr.%205a%2C%204072%20Alkoven%2C%20Austria!5e0!3m2!1sen!2sus!4v1716371857045!5m2!1sen!2sus" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="AA Automobile Standort"
          className="opacity-70"
        ></iframe>
      </div>
      
      <div className="container mx-auto py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 bg-gradient-to-r from-white via-white to-aa-turquoise bg-clip-text text-transparent">
            Kontaktieren Sie uns
          </h2>
          <p className="text-gray-300 text-xl mb-10">
            Buchen Sie eine kostenlose Probefahrt oder kaufen Sie ein Auto
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office Location */}
            <div className="bg-aa-dark-gray/90 backdrop-blur-sm p-6 rounded-xl flex items-start justify-between group hover:bg-black hover:border hover:border-aa-turquoise transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-aa-turquoise mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Hauptsitz</h3>
                  <address className="text-gray-300 not-italic">
                    <p>Gewerbestraße 5a</p>
                    <p>4072 Alkoven</p>
                    <p>Österreich</p>
                  </address>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-aa-dark-gray/90 backdrop-blur-sm p-6 rounded-xl flex items-start justify-between group hover:bg-black hover:border hover:border-aa-turquoise transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-aa-turquoise mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Rufen Sie uns an</h3>
                  <a href="tel:+43123456789" className="text-gray-300 hover:text-aa-turquoise transition-colors duration-300">
                    +43 123 456789
                  </a>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="bg-aa-dark-gray/90 backdrop-blur-sm p-6 rounded-xl flex items-start justify-between group hover:bg-black hover:border hover:border-aa-turquoise transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-aa-turquoise mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Email kontakt</h3>
                  <a href="mailto:info@aa-automobile.at" className="text-gray-300 hover:text-aa-turquoise transition-colors duration-300">
                    info@aa-automobile.at
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
