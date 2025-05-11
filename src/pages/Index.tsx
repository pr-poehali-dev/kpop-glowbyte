
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import StarBackground from '@/components/StarBackground';
import PhotoCard from '@/components/PhotoCard';
import MusicPlayer from '@/components/MusicPlayer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to GLOWBYTE",
      description: "Explore photos and music from your favorite K-pop group",
    });
  }, [toast]);

  // Featured photos - using placeholder images
  const featuredPhotos = [
    {
      id: 1,
      imageUrl: "https://cdn.poehali.dev/files/6102ccc4-dda3-4c7c-834b-fd482702f195.jpeg",
      title: "Star Aesthetic",
      date: "May 2025"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Backstage Moments",
      date: "April 2025"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1611601147557-cdc89a469acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      title: "Concert Highlights",
      date: "March 2025"
    },
  ];

  return (
    <div className="star-bg min-h-screen flex flex-col">
      <StarBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center mb-16 md:mb-24 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-glowbyte-800">
              GLOW<span className="text-glowbyte-500">BYTE</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-glowbyte-600 max-w-2xl mb-6">
              we're syncing feelings, not files
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button className="bg-glowbyte-500 hover:bg-glowbyte-600">
                <Icon name="Images" className="mr-2 h-4 w-4" />
                View Photos
              </Button>
              <Button variant="outline" className="border-glowbyte-300 text-glowbyte-700">
                <Icon name="Music" className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
            </div>
          </section>
          
          {/* Featured Photos Section */}
          <section className="mb-16 md:mb-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-playfair font-semibold text-glowbyte-800">
                Latest Photos
              </h2>
              <Link to="/photos" className="text-sm text-glowbyte-500 hover:text-glowbyte-700 flex items-center">
                View all 
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  imageUrl={photo.imageUrl}
                  title={photo.title}
                  date={photo.date}
                />
              ))}
            </div>
          </section>
          
          {/* Music Player Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-playfair font-semibold text-glowbyte-800">
                Featured Music
              </h2>
              <Link to="/music" className="text-sm text-glowbyte-500 hover:text-glowbyte-700 flex items-center">
                Full discography
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <MusicPlayer />
          </section>
          
          {/* Quote Section */}
          <section className="glass rounded-2xl max-w-3xl mx-auto p-8 md:p-12">
            <blockquote className="font-playfair italic text-xl md:text-2xl text-center text-glowbyte-800">
              "Music speaks what cannot be expressed, soothes the mind and gives it rest."
            </blockquote>
            <p className="text-center text-glowbyte-600 mt-4">— GLOWBYTE</p>
          </section>
        </div>
      </main>
      
      <footer className="bg-white bg-opacity-40 backdrop-blur-sm border-t border-glowbyte-100">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-glowbyte-600 mb-4 md:mb-0">
              © 2025 GLOWBYTE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-glowbyte-600 hover:text-glowbyte-800">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-glowbyte-600 hover:text-glowbyte-800">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-glowbyte-600 hover:text-glowbyte-800">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-glowbyte-600 hover:text-glowbyte-800">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
