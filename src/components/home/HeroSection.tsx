
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Users, Car, Euro, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface HeroFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const form = useForm<HeroFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
    },
  });

  const handleSubmit = (data: HeroFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white">
      {/* Hero Main Content */}
      <div className="container mx-auto px-4 pt-16 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-aa-turquoise">AA</span> Automobile <span className="block text-3xl md:text-4xl mt-2">- Schnell & Zuverlässig</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ihr vertrauenswürdiger Partner für den Gebrauchtwagenverkauf. Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center shadow-lg">
              <Users className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center shadow-lg">
              <Car className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center shadow-lg">
              <Euro className="text-aa-turquoise" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">10+ Jahre Erfahrung</h3>
            <p className="text-gray-600">Im Automobilhandel</p>
          </div>
        </motion.div>
      </div>

      {/* Background Image */}
      <div className="w-full h-96 bg-gray-100 relative">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
          alt="AA Automobile Dealership" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Horizontal Contact Form */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto -mt-24 relative z-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Termin vereinbaren</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} className="w-full" required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} className="w-full" required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Telefon" type="tel" {...field} className="w-full" required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Dienstleistung" {...field} className="w-full" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex flex-col items-center">
                <Button type="submit" className="bg-aa-turquoise hover:bg-aa-turquoise/90 px-8 py-3 w-full md:w-auto">
                  Rückruf anfordern
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  Mit dem Absenden stimmen Sie unseren <a href="/datenschutz" className="text-aa-turquoise hover:underline">Datenschutzbestimmungen</a> zu
                </div>
              </div>
            </form>
          </Form>
          
          <div className="mt-6 flex items-center gap-2 justify-center">
            <Phone size={16} className="text-aa-turquoise" />
            <span className="text-gray-700">Oder rufen Sie uns an: <a href="tel:+49123456789" className="text-aa-turquoise font-semibold">+49 123 456 789</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
