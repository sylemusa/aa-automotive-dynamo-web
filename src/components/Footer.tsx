
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-aa-dark-gray">
      {/* Contact Us Map Section */}
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
            className="opacity-70" // Verändert von opacity-75
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
                    <a href="tel:+49123456789" className="text-gray-300 hover:text-aa-turquoise transition-colors duration-300">
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
      
      <div className="container mx-auto py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/fd77ee5d-f3d6-4a93-a46e-c739f5e5865d.png" 
                alt="AA Automobile Logo" 
                className="h-12 mr-2" 
              />
              <span className="text-white font-display text-xl font-bold">AA Automobile</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Ihr vertrauenswürdiger Partner für den Gebrauchtwagenhandel. Persönlich, fair und zuverlässig.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-aa-dark-gray hover:bg-aa-turquoise text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-aa-dark-gray hover:bg-aa-turquoise text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://wa.me/43123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-aa-dark-gray hover:bg-aa-turquoise text-white p-2 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xl font-display font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-display font-semibold mb-4">Dienstleistungen</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Gebrauchtwagenkauf
              </li>
              <li className="text-gray-400">
                Fahrzeugvermittlung
              </li>
              <li className="text-gray-400">
                Fahrzeugbewertung
              </li>
              <li className="text-gray-400">
                Finanzierung
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-display font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Abonnieren Sie unseren Newsletter für die neusten Angebote</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ihre E-Mail Adresse" 
                className="bg-aa-dark-gray text-gray-300 p-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-aa-turquoise"
              />
              <button className="bg-aa-turquoise text-white p-2 rounded-r-md hover:bg-aa-turquoise/80 transition-colors duration-300">
                Absenden
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with legal links */}
        <div className="border-t border-aa-dark-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AA Automobile. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/impressum" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
              Datenschutz
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-aa-turquoise transition-colors duration-300">
              Cookie-Einstellungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
