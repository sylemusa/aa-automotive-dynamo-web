
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
      <p className="text-gray-400 mb-4">Abonnieren Sie unseren Newsletter für die neusten Angebote</p>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="email" 
          placeholder="Ihre E-Mail Adresse" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-aa-dark-gray text-gray-300 p-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-aa-turquoise"
        />
        <button 
          type="submit" 
          className="bg-aa-turquoise text-white p-2 rounded-r-md hover:bg-aa-turquoise/80 transition-colors duration-300"
        >
          Absenden
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
