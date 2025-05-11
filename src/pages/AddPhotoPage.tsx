
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import StarBackground from '@/components/StarBackground';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PhotoFormData {
  title: string;
  caption: string;
  date: string;
}

const AddPhotoPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<PhotoFormData>({
    title: '',
    caption: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет логика сохранения фото и данных
    toast({
      title: "Фото добавлено",
      description: "Ваше фото было успешно добавлено в галерею",
    });
    
    navigate('/photos');
  };

  return (
    <div className="star-bg min-h-screen flex flex-col">
      <StarBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Link to="/photos" className="text-glowbyte-600 hover:text-glowbyte-800 mr-2">
                <Icon name="ArrowLeft" className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-glowbyte-800">
                Добавить новое фото
              </h1>
            </div>
            
            <div className="glass rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="photo">Выберите фото</Label>
                  <div className="border-2 border-dashed border-glowbyte-200 rounded-lg p-8 text-center">
                    <Icon name="Upload" className="h-10 w-10 text-glowbyte-400 mx-auto mb-3" />
                    <p className="text-glowbyte-600 mb-2">
                      Перетащите файл или нажмите для выбора
                    </p>
                    <Input 
                      id="photo" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById('photo')?.click()}
                    >
                      Выбрать файл
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Заголовок</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    placeholder="Введите заголовок фото" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="caption">Подпись</Label>
                  <Textarea 
                    id="caption" 
                    name="caption" 
                    value={formData.caption} 
                    onChange={handleChange} 
                    placeholder="Добавьте описание к фото" 
                    rows={3} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input 
                    id="date" 
                    name="date" 
                    type="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/photos')}
                  >
                    Отмена
                  </Button>
                  <Button type="submit" className="bg-glowbyte-500 hover:bg-glowbyte-600">
                    Сохранить
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPhotoPage;
