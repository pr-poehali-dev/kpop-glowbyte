import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PhotosPage from "./pages/PhotosPage";
import AddPhotoPage from "./pages/AddPhotoPage";

// Создаем клиент с опциями по умолчанию для решения проблемы
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 минут
    },
  },
});

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/photos/add" element={<AddPhotoPage />} />
          <Route path="/music" element={<Index />} /> {/* Placeholder route */}
          <Route path="/about" element={<Index />} /> {/* Placeholder route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </TooltipProvider>
  </BrowserRouter>
);

export default App;
