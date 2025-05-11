
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import StarBackground from '@/components/StarBackground';
import PhotoCard from '@/components/PhotoCard';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Photo {
  id: number;
  title: string;
  caption?: string;
  date?: string;
}

const PhotosPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, title: "Выступление", caption: "Фото с концерта", date: "01.05.2025" },
    { id: 2, title: "Фотосессия", caption: "Для нового альбома", date: "15.04.2025" },
    { id: 3, title: "Закулисье", caption: "Подготовка к выступлению", date: "20.03.2025" },
    { id: 4, title: "Встреча с фанатами", caption: "Автограф-сессия", date: "10.03.2025" },
    { id: 5, title: "Репетиция", caption: "Подготовка хореографии", date: "05.03.2025" },
    { id: 6, title: "Интервью", caption: "Для журнала K-POP Stories", date: "25.02.2025" },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (photo.caption && photo.caption.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="star-bg min-h-screen flex flex-col">
      <StarBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-glowbyte-800">
              Галерея фотографий
            </h1>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Input 
                  type="search"
                  placeholder="Поиск по фото..." 
                  className="pr-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon 
                  name="Search" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-glowbyte-400" 
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icon name="SlidersHorizontal" className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    Сортировать по дате
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Сортировать по названию
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/photos/add">
                <Button className="bg-glowbyte-500 hover:bg-glowbyte-600">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить
                </Button>
              </Link>
            </div>
          </div>
          
          {filteredPhotos.length === 0 ? (
            <div className="glass rounded-xl p-8 text-center">
              <Icon name="Image" className="h-12 w-12 text-glowbyte-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-glowbyte-700">Фотографии не найдены</h3>
              <p className="text-glowbyte-600 mb-6">
                {searchTerm 
                  ? "По вашему запросу не найдено фотографий. Попробуйте изменить параметры поиска." 
                  : "В галерее пока нет фотографий. Добавьте первое фото!"}
              </p>
              <Link to="/photos/add">
                <Button className="bg-glowbyte-500 hover:bg-glowbyte-600">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить фото
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  imageUrl=""
                  title={photo.title}
                  caption={photo.caption}
                  date={photo.date}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PhotosPage;
