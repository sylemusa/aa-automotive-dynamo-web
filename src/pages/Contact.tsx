import { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle, Instagram, Facebook } from 'lucide-react';
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
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
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
  return <div className="pt-20">
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
      

      {/* Map Section */}
      

      {/* CTA Section */}
      
    </div>;
};
export default Contact;