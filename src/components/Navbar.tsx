
import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

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

  // For subpages, always use dark background
  const shouldUseDarkBg = !isHomePage || scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseDarkBg
          ? 'bg-aa-dark-gray shadow-md py-3' 
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
          <span className={`font-display text-xl font-bold ml-2 ${shouldUseDarkBg ? 'text-white' : 'text-white'}`}>
            AA Automobile
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${shouldUseDarkBg ? 'text-gray-300 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Startseite
          </Link>
          <Link to="/ueber-uns" className={`${shouldUseDarkBg ? 'text-gray-300 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Über uns
          </Link>
          <Link to="/dienstleistungen" className={`${shouldUseDarkBg ? 'text-gray-300 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Dienstleistungen
          </Link>
          <Link to="/kontakt" className={`${shouldUseDarkBg ? 'text-gray-300 hover:text-aa-turquoise' : 'text-white hover:text-aa-turquoise'} transition-colors duration-300`}>
            Kontakt
          </Link>
          <a 
            href="tel:+436601907710" 
            className="flex items-center bg-aa-turquoise text-white px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_10px_rgba(65,182,230,0.5)]"
          >
            <PhoneCall size={18} className="mr-2" />
            <span>+43 660 1907710</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${shouldUseDarkBg ? 'text-white' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-aa-dark-gray shadow-lg md:hidden">
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
              href="tel:+436601907710" 
              className="flex items-center justify-center bg-aa-turquoise text-white px-4 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <PhoneCall size={18} className="mr-2" />
              <span>+43 660 1907710</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
