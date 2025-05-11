import { cn } from "@/lib/utils";

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  caption?: string;
  date?: string;
  className?: string;
}

const PhotoCard = ({
  imageUrl,
  title,
  caption,
  date,
  className,
}: PhotoCardProps) => {
  return (
    <div
      className={cn(
        "photo-card group rounded-xl overflow-hidden glass",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-glowbyte-200/30 backdrop-blur-sm">
          <span className="text-glowbyte-600 font-medium">Нет фото</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-playfair font-medium">{title}</h3>
            {caption && <p className="text-sm mt-1">{caption}</p>}
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
