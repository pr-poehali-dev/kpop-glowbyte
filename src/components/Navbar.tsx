
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Photos', path: '/photos' },
    { name: 'Music', path: '/music' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:px-8',
        isScrolled ? 'glass' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-playfair font-bold text-glowbyte-800">
            GLOW<span className="text-glowbyte-500">BYTE</span>
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-glowbyte-500",
                location.pathname === link.path 
                  ? "text-glowbyte-500 font-medium" 
                  : "text-glowbyte-800"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <button className="p-1">
            <Icon name="Menu" className="h-6 w-6 text-glowbyte-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
