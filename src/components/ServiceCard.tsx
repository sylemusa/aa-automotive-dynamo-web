
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm card-hover">
      <div className="bg-aa-turquoise/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-aa-turquoise">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
