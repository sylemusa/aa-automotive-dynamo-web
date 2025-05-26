
import { useState } from 'react';
import { Mail } from 'lucide-react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">
        Bleiben Sie über unsere neuesten Fahrzeuge und Angebote informiert.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-2 bg-aa-dark-gray border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aa-turquoise focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-aa-turquoise hover:bg-aa-turquoise/90 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium"
        >
          Abonnieren
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
