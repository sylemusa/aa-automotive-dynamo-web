import { MapPin, Phone, Mail } from 'lucide-react';
const ContactMap = () => {
  return <div className="relative">
      <div className="absolute inset-0 z-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.39582008111!2d14.006144600000002!3d48.22607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774cfd9b293ed79%3A0xf47db28070ce3c0a!2sGewerbestr.%205a%2C%204072%20Alkoven%2C%20Austria!5e0!3m2!1sen!2sus!4v1716371857045!5m2!1sen!2sus" width="100%" height="500" style={{
        border: 0
      }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AA Automobile Standort" className="opacity-80"></iframe>
      </div>
      
      
    </div>;
};
export default ContactMap;