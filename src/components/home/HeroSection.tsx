
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Users, Car, Euro, Phone, Send } from 'lucide-react';
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
      service: ''
    }
  });

  const handleSubmit = (data: HeroFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <section className="relative bg-transparent">
      {/* Background Image - Full height */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mercedes S-Class" className="w-full h-full object-cover brightness-[0.8]" />
        {/* Darker gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      </div>
      
      {/* Hero Main Content - Increased padding top and bottom */}
      <div className="container mx-auto px-4 pt-40 pb-24 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 text-white">
            <span className="text-aa-turquoise">-Schnell &amp; Zuverlässig</span> Automobile
          </h1>
          
          {/* Separated subtitle with gradient text styling */}
          <p className="text-3xl md:text-4xl mt-1 mb-4 gradient-text font-bold">- Schnell &amp; Zuverlässig</p>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ihr vertrauenswürdiger Partner für den Gebrauchtwagenverkauf. Auto kaufen oder verkaufen – wir bieten faire Angebote, geprüfte Fahrzeuge & persönliche Beratung.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} className="flex items-center justify-center gap-6 mb-4">
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Users className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Car className="text-aa-turquoise" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Euro className="text-aa-turquoise" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">10+ Jahre Erfahrung</h3>
            <p className="text-white/80">Im Automobilhandel</p>
          </div>
        </motion.div>
        
        {/* Thin Contact Form */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }} transition={{
        duration: 0.7,
        delay: 0.6
      }} className="max-w-3xl mx-auto glass-card rounded-lg p-3 my-2 glass-card-hover">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-2 gap-2">
              <FormField control={form.control} name="name" render={({
              field
            }) => <FormItem className="space-y-1">
                    <FormControl>
                      <Input placeholder="Ihr Name" {...field} className="h-8 bg-black/30 border-gray-700/50 text-white placeholder:text-gray-400" />
                    </FormControl>
                  </FormItem>} />
              
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem className="space-y-1">
                    <FormControl>
                      <Input placeholder="Ihre E-Mail" type="email" {...field} className="h-8 bg-black/30 border-gray-700/50 text-white placeholder:text-gray-400" />
                    </FormControl>
                  </FormItem>} />
              
              <FormField control={form.control} name="phone" render={({
              field
            }) => <FormItem className="space-y-1">
                    <FormControl>
                      <Input placeholder="Telefonnummer" type="tel" {...field} className="h-8 bg-black/30 border-gray-700/50 text-white placeholder:text-gray-400" />
                    </FormControl>
                  </FormItem>} />
              
              <FormField control={form.control} name="service" render={({
              field
            }) => <FormItem className="space-y-1">
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input placeholder="Ihre Nachricht" {...field} className="h-8 bg-black/30 border-gray-700/50 text-white placeholder:text-gray-400 pr-10" />
                        <Button type="submit" size="sm" className="absolute right-0 top-0 bottom-0 h-8 bg-aa-turquoise hover:bg-aa-turquoise/80">
                          <Send className="w-3 h-3" />
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>} />
            </form>
          </Form>
        </motion.div>
      </div>
    </section>;
};

export default HeroSection;
