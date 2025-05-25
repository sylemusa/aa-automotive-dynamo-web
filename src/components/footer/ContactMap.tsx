
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Kontakt aufnehmen</h2>
              <p className="text-gray-400 text-lg">Vereinbaren Sie eine Probefahrt oder kaufen Sie ein Auto</p>
            </div>
            
            <div className="space-y-4">
              {/* Headquarter office */}
              <div className="bg-aa-dark-gray text-white p-6 rounded-lg glass-card glass-card-hover">
                <div className="flex items-start mb-4">
                  <MapPin className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Unser Standort</h3>
                  </div>
                </div>
                <div className="text-gray-300 leading-relaxed">
                  <p>Gewerbestr. 5a</p>
                  <p>4072 Alkoven</p>
                  <p>Österreich</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="bg-aa-dark-gray text-white p-6 rounded-lg glass-card glass-card-hover">
                <div className="flex items-center">
                  <Phone className="text-aa-turquoise mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">+43 7274 20900</h3>
                    <p className="text-gray-300">Rufen Sie uns an</p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-aa-dark-gray text-white p-6 rounded-lg glass-card glass-card-hover">
                <div className="flex items-center">
                  <Mail className="text-aa-turquoise mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">office@aa-automobile.at</h3>
                    <p className="text-gray-300">Schreiben Sie uns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-lg glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8234567890123!2d14.1234567!3d48.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzI4LjQiTiAxNMKwMDcnMjguNCJF!5e0!3m2!1sen!2sat!4v1234567890123!5m2!1sen!2sat"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AA Automobile Standort - Gewerbestr. 5a, 4072 Alkoven, Österreich"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
