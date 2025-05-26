
import { useState } from 'react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-white text-xl font-display font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Bleiben Sie über neue Fahrzeuge und Angebote informiert
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ihre E-Mail-Adresse"
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-aa-turquoise"
          required
        />
        <button
          type="submit"
          className="w-full bg-aa-turquoise hover:bg-aa-turquoise/80 text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
