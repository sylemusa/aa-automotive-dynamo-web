
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const FooterLogo = () => {
  return (
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
  );
};

export default FooterLogo;
