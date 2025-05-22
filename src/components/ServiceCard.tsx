
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-aa-dark-gray p-6 rounded-xl border border-aa-dark-gray card-hover">
      <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-aa-turquoise">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
