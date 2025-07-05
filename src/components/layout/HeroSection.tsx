
import React from 'react';
import { Button } from '@/components/ui/button';
import { DropAnimation } from '@/components/animations/DropAnimation';

export const HeroSection = () => {
  return (
    <DropAnimation delay={200} dropHeight={50} duration={1}>
      <section className="relative h-96 bg-gradient-to-r from-red-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">CELEBRATE AFRICA</h2>
          <p className="text-xl mb-6">Premium streetwear inspired by African heritage</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Shop Collection
          </Button>
        </div>
      </section>
    </DropAnimation>
  );
};
