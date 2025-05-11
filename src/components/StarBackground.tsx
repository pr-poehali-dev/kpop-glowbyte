
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  color: string;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(214, 229, 250, 0.8)',
      'rgba(184, 208, 247, 0.8)',
      'rgba(197, 173, 255, 0.6)',
      'rgba(157, 196, 255, 0.7)'
    ];
    
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth / 10); // Responsive star count
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 0.1 + Math.random() * 0.5,
          opacity: 0.3 + Math.random() * 0.7,
          animationDelay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}rem`,
            height: `${star.size}rem`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
