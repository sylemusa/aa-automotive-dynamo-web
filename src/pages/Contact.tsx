
import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Calendar, CheckCircle, Instagram, Facebook
} from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="section-title text-center">Kontakt</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="section-subtitle text-center mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir sind für Sie da und freuen uns auf Ihre Nachricht.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <div className="bg-aa-dark-gray p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Schreiben Sie uns</h2>
                
                {submitted ? (
                  <div className="bg-green-900/30 border border-green-700 text-green-100 p-4 rounded-lg animate-fade-in flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Nachricht erfolgreich gesendet!</p>
                      <p>Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name *</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aa-turquoise"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">E-Mail *</label>
                        <input 
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aa-turquoise"
                          placeholder="ihre-email@beispiel.de"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-white mb-2">Telefon</label>
                        <input 
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aa-turquoise"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">Betreff *</label>
                      <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aa-turquoise"
                        placeholder="Worum geht es?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">Nachricht *</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-aa-turquoise resize-none"
                        placeholder="Wie können wir Ihnen helfen?"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400 text-sm">* Pflichtfelder</p>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className={`btn-primary ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollAnimation>
            
            {/* Contact Info */}
            <ScrollAnimation delay={300}>
              <div className="space-y-8">
                <div className="bg-aa-dark-gray p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Kontaktinformationen</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-black p-3 rounded-full text-aa-turquoise mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Telefon</h3>
                        <a href="tel:+49123456789" className="text-gray-300 hover:text-aa-turquoise transition-colors">
                          +49 123 456789
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-black p-3 rounded-full text-aa-turquoise mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">E-Mail</h3>
                        <a href="mailto:info@aa-automobile.de" className="text-gray-300 hover:text-aa-turquoise transition-colors">
                          info@aa-automobile.de
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-black p-3 rounded-full text-aa-turquoise mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Adresse</h3>
                        <p className="text-gray-300">
                          Musterstraße 1<br />
                          12345 Musterstadt<br />
                          Deutschland
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-black p-3 rounded-full text-aa-turquoise mr-4">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Öffnungszeiten</h3>
                        <div className="text-gray-300 grid grid-cols-2 gap-2">
                          <span>Montag - Freitag:</span>
                          <span>09:00 - 18:00</span>
                          <span>Samstag:</span>
                          <span>10:00 - 14:00</span>
                          <span>Sonntag:</span>
                          <span>Geschlossen</span>
                        </div>
                        <p className="text-gray-300 mt-2">
                          <span className="text-aa-turquoise">Nach Vereinbarung:</span> Termine auch außerhalb der Öffnungszeiten möglich
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-aa-dark-gray p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">Social Media</h2>
                  <p className="text-gray-300 mb-4">Folgen Sie uns auf unseren Social-Media-Kanälen für aktuelle Informationen und Angebote.</p>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-aa-turquoise text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-aa-turquoise text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a 
                      href="https://wa.me/49123456789" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-aa-turquoise text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
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
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-black to-aa-dark-gray">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Finden Sie uns</h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654394664273!2d13.372469776926151!3d52.50793287205107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1714584985151!5m2!1sde!2sde" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AA Automobile Standort"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aa-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vereinbaren Sie einen persönlichen Termin
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Für eine individuelle Beratung stehen wir Ihnen gerne zur Verfügung. Sprechen Sie uns an!
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <a href="tel:+49123456789" className="btn-primary inline-flex items-center">
              <Phone size={18} className="mr-2" />
              +49 123 456789
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;
