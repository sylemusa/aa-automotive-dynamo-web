
import ContactMap from './footer/ContactMap';
import FooterLogo from './footer/FooterLogo';
import FooterNavigation from './footer/FooterNavigation';
import FooterLegal from './footer/FooterLegal';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-aa-dark-gray">
      {/* Contact Us Map Section */}
      <ContactMap />
      
      <div className="container mx-auto py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and about */}
          <FooterLogo />

          {/* Navigation */}
          <FooterNavigation />
        </div>

        {/* Bottom section with legal links */}
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;
