
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <Link to="/" className="flex items-center">
        <img src="/lovable-uploads/fd77ee5d-f3d6-4a93-a46e-c739f5e5865d.png" alt="AA-Automobile Logo" className="h-12 mr-2" />
        <span className="text-white font-display text-xl font-bold">AA-Automobile</span>
      </Link>
      <p className="text-gray-400 mt-4">
        Ihr vertrauenswürdiger Partner für den Gebrauchtwagenhandel. Persönlich, fair und zuverlässig.
      </p>
      <div className="flex space-x-4 pt-2">
        <a href="https://www.instagram.com/aa_automobile.at?utm_source=qr&igsh=MXRleHJmNHZvMXlicQ%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-aa-dark-gray hover:bg-aa-turquoise text-white p-2 rounded-full transition-colors duration-300" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61576090841785&rdid=Ds4os47FrpHM2OKG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17jo93ejq4%2F" target="_blank" rel="noopener noreferrer" className="bg-aa-dark-gray hover:bg-aa-turquoise text-white p-2 rounded-full transition-colors duration-300" aria-label="Facebook">
          <Facebook size={20} />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;
