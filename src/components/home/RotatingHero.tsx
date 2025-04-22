'use client';

import { useState } from 'react';
import HeroSection from './HeroSection';
import ServicesHero from '../services/ServicesHero';
import InsightsHero from '../insights/InsightsHero';

export default function RotatingHero() {
  const [currentHero, setCurrentHero] = useState(0);
  const heroes = [
    { component: HeroSection, key: 'main' },
    { component: ServicesHero, key: 'services' },
    { component: InsightsHero, key: 'insights' }
  ];

  return (
    <div className="relative">
      {/* Hero Components */}
      <div className="relative">
        {heroes.map((Hero, index) => (
          <div
            key={Hero.key}
            className={`transition-all duration-700 ${
              index === currentHero 
                ? 'opacity-100 z-10 relative' 
                : 'opacity-0 z-0 absolute inset-0'
            }`}
          >
            <Hero.component />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentHero
                ? 'bg-white scale-110 ring-2 ring-white/50'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`View ${index === 0 ? 'main' : index === 1 ? 'services' : 'insights'} hero`}
          />
        ))}
      </div>
    </div>
  );
} 