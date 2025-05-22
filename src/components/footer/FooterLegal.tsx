
import { Link } from 'react-router-dom';

const FooterLegal = () => {
  return (
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
  );
};

export default FooterLegal;
