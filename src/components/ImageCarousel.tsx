
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const ImageCarousel = ({ 
  images, 
  alt = "Carousel image", 
  autoplay = true, 
  autoplaySpeed = 5000 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(goToNext, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item transition-opacity duration-500 ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center z-10 hover:bg-white/90 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center z-10 hover:bg-white/90 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
