
import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/fd77ee5d-f3d6-4a93-a46e-c739f5e5865d.png" 
            alt="AA Automobile Logo" 
            className="h-12 mr-2" 
          />
          <span className={`font-display text-xl font-bold ml-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            AA Automobile
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${scrolled ? 'text-gray-700 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Startseite
          </Link>
          <Link to="/ueber-uns" className={`${scrolled ? 'text-gray-700 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Über uns
          </Link>
          <Link to="/dienstleistungen" className={`${scrolled ? 'text-gray-700 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Dienstleistungen
          </Link>
          <Link to="/kontakt" className={`${scrolled ? 'text-gray-700 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Kontakt
          </Link>
          <a 
            href="tel:+49123456789" 
            className="flex items-center bg-aa-turquoise text-white px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_10px_rgba(65,182,230,0.5)]"
          >
            <PhoneCall size={18} className="mr-2" />
            <span>+49 123 456789</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 py-3 px-4 hover:bg-aa-turquoise/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              to="/ueber-uns" 
              className="text-gray-700 py-3 px-4 hover:bg-aa-turquoise/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              to="/dienstleistungen" 
              className="text-gray-700 py-3 px-4 hover:bg-aa-turquoise/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Dienstleistungen
            </Link>
            <Link 
              to="/kontakt" 
              className="text-gray-700 py-3 px-4 hover:bg-aa-turquoise/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <a 
              href="tel:+49123456789" 
              className="flex items-center justify-center bg-aa-turquoise text-white px-4 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <PhoneCall size={18} className="mr-2" />
              <span>+49 123 456789</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
