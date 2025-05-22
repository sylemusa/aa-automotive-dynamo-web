
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="bg-black py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Kontakt</h2>
          <p className="text-gray-400">Wir sind für Sie da</p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-aa-dark-gray rounded-lg p-6 max-w-md w-full">
            <div className="flex items-start mb-4">
              <MapPin className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Adresse</p>
                <p className="text-gray-300">Gewerbestr. 5a, 4072 Alkoven, Austria</p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Phone className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Telefon</p>
                <p className="text-gray-300">+43 7274 20900</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-aa-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">E-Mail</p>
                <p className="text-gray-300">office@aa-automobile.at</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
