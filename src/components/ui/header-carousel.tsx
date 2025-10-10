import React, { useState, useEffect } from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';

import headerImg1 from '@/assets/header-img-1.jpg';
import headerImg2 from '@/assets/header-img-2.jpg';
import headerImg3 from '@/assets/header-img-3.jpg';
import headerImg4 from '@/assets/header-img-4.jpg';
import headerImg5 from '@/assets/header-img-5.jpg';
import headerImg6 from '@/assets/header-img-6.jpg';
import headerImg7 from '@/assets/header-img-7.jpg';

const images = [
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
  headerImg5,
  headerImg6,
  headerImg7,
];

interface HeaderCarouselProps {
  className?: string;
}

export const HeaderCarousel: React.FC<HeaderCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <OptimizedImage
            src={image}
            alt={`Afrika's Finest Collection ${index + 1}`}
            className="w-full h-full object-cover"
            lazy={false}
          />
        </div>
      ))}
    </div>
  );
};