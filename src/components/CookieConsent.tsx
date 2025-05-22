
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [consents, setConsents] = useState({
    essential: true, // Always required
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent was already given
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allConsents = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setConsents(allConsents);
    localStorage.setItem('cookieConsent', JSON.stringify(allConsents));
    setVisible(false);
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setConsents(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consents));
    setVisible(false);
    setSettings(false);
  };

  const handleCheckboxChange = (type) => {
    setConsents(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-md border-t border-aa-turquoise/30 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h3 className="text-white font-semibold text-lg mb-2">Cookie-Einstellungen</h3>
            <p className="text-gray-300 text-sm mb-4">
              Diese Website verwendet Cookies für ein besseres Nutzererlebnis. Sie können auswählen, welche Cookies Sie zulassen möchten.
            </p>
            
            {settings && (
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox"
                    id="essential"
                    checked={consents.essential}
                    disabled
                    className="mr-2 accent-aa-turquoise h-4 w-4"
                  />
                  <label htmlFor="essential" className="text-white text-sm cursor-not-allowed">
                    Essenziell (erforderlich)
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="functional"
                    checked={consents.functional}
                    onChange={() => handleCheckboxChange('functional')}
                    className="mr-2 accent-aa-turquoise h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor="functional" className="text-white text-sm cursor-pointer">
                    Funktional (z.B. Formulare, Einstellungen speichern)
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="analytics"
                    checked={consents.analytics}
                    onChange={() => handleCheckboxChange('analytics')}
                    className="mr-2 accent-aa-turquoise h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor="analytics" className="text-white text-sm cursor-pointer">
                    Analytisch (z.B. Google Analytics)
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="marketing"
                    checked={consents.marketing}
                    onChange={() => handleCheckboxChange('marketing')}
                    className="mr-2 accent-aa-turquoise h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor="marketing" className="text-white text-sm cursor-pointer">
                    Marketing (z.B. Facebook Pixel)
                  </label>
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setVisible(false)} 
            className="text-white hover:text-aa-turquoise"
            aria-label="Schließen"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-end mt-4">
          {settings ? (
            <button
              onClick={saveSettings}
              className="bg-aa-turquoise text-white px-5 py-2 rounded-lg font-medium text-sm hover:shadow-[0_0_10px_rgba(65,182,230,0.5)] transition-all"
            >
              Einstellungen speichern
            </button>
          ) : (
            <>
              <button
                onClick={acceptEssential}
                className="bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:border-aa-turquoise transition-all"
              >
                Nur essenzielle Cookies
              </button>
              <button
                onClick={() => setSettings(true)}
                className="bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:border-aa-turquoise transition-all"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptAll}
                className="bg-aa-turquoise text-white px-5 py-2 rounded-lg font-medium text-sm hover:shadow-[0_0_10px_rgba(65,182,230,0.5)] transition-all"
              >
                Alle akzeptieren
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
