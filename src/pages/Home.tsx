
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutManagerSection from '../components/home/AboutManagerSection';
import VehiclesPlatformSection from '../components/home/VehiclesPlatformSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutManagerSection />
      <TestimonialsSection />
      <VehiclesPlatformSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Home;
