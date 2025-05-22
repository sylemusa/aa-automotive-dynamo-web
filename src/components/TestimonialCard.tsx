
interface TestimonialCardProps {
  name: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm card-hover">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-gray-900 font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
