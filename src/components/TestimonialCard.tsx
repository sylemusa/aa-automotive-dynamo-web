
interface TestimonialCardProps {
  name: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 glass-card-hover bg-black/60">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-aa-turquoise/30 shadow-[0_0_10px_rgba(65,182,230,0.15)]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-gray-100 font-semibold">{name}</h3>
      </div>
      <p className="text-gray-400 italic">"{testimonial}"</p>
      <div className="h-1 w-16 bg-gradient-to-r from-aa-turquoise to-transparent rounded mt-4"></div>
    </div>
  );
};

export default TestimonialCard;
