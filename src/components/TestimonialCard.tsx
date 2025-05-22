
interface TestimonialCardProps {
  name: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-aa-dark-gray p-6 rounded-xl card-hover">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white font-semibold">{name}</h3>
      </div>
      <p className="text-gray-300 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
