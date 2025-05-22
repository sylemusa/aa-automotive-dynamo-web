
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
          className="opacity-80"
        ></iframe>
      </div>
      
      <div className="container mx-auto py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-black">
            Get in touch
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Book a free test drive or buy a car
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office Location */}
            <div className="bg-gray-700/90 backdrop-blur-sm p-6 rounded-lg flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-white mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Headquarter office</h3>
                  <address className="text-white not-italic">
                    <p>Storkower Strasse 41</p>
                    <p>Rheinland-Pfalz</p>
                    <p>56379</p>
                    <p>Germany, Berlin</p>
                  </address>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-gray-700/90 backdrop-blur-sm p-6 rounded-lg flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-white mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">+1 (415) 555-0132</h3>
                  <p className="text-white">
                    Call us
                  </p>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="bg-gray-700/90 backdrop-blur-sm p-6 rounded-lg flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-white mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">support@bydrive.com</h3>
                  <p className="text-white">
                    Send your email
                  </p>
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
