
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import StarBackground from '@/components/StarBackground';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="star-bg min-h-screen flex items-center justify-center">
      <StarBackground />
      <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-md mx-auto">
        <div className="text-6xl font-bold text-glowbyte-500 mb-4">404</div>
        <h1 className="text-3xl font-playfair font-semibold text-glowbyte-800 mb-4">
          Страница не найдена
        </h1>
        <p className="text-glowbyte-600 mb-8">
          Похоже, что эта звезда исчезла из нашей галактики или находится в другом измерении.
        </p>
        <Link to="/">
          <Button className="bg-glowbyte-500 hover:bg-glowbyte-600">
            <Icon name="Home" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
