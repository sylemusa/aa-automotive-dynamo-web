
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 glass-card-hover bg-black/60">
      <div className="bg-gradient-to-br from-aa-turquoise/20 to-aa-turquoise/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-aa-turquoise shadow-[0_0_10px_rgba(65,182,230,0.2)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
