
import { Link } from 'react-router-dom';

const FooterNavigation = () => {
  return (
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
  );
};

export default FooterNavigation;
