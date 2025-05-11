
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  date?: string;
  className?: string;
}

const PhotoCard = ({ imageUrl, title, date, className }: PhotoCardProps) => {
  return (
    <div 
      className={cn(
        "photo-card group rounded-xl overflow-hidden glass",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-playfair font-medium">{title}</h3>
            {date && <p className="text-xs opacity-80 mt-1">{date}</p>}
          </div>
        </div>
      </div>
      
      {/* Decorative stars */}
      <div className="star w-4 h-4 text-star-light">★</div>
      <div className="star w-3 h-3 text-star-accent">★</div>
      <div className="star w-2 h-2 text-star-purple">★</div>
    </div>
  );
};

export default PhotoCard;
