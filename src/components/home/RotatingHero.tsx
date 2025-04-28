'use client';

import { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import ServicesHero from '../services/ServicesHero';
import InsightsHero from '../insights/InsightsHero';

const SLIDE_DURATION = 5000; // 5 seconds
const PROGRESS_COLORS = [
  'bg-blue-400', // main
  'bg-yellow-400', // services
  'bg-pink-400', // insights
];

export default function RotatingHero() {
  const [currentHero, setCurrentHero] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroes = [
    { component: HeroSection, key: 'main' },
    { component: ServicesHero, key: 'services' },
    { component: InsightsHero, key: 'insights' }
  ];

  // Autoplay logic
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
      setProgress(0);
    }, SLIDE_DURATION);
    // Progress animation
    let start = Date.now();
    let frame: number;
    function animate() {
      if (paused) return;
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
      if (elapsed < SLIDE_DURATION) {
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      cancelAnimationFrame(frame);
    };
  }, [currentHero, paused]);

  // Manual slide change resets progress
  const handleManualChange = (idx: number) => {
    setCurrentHero(idx);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Hero Components */}
      <div className="relative w-full h-full">
        {heroes.map((Hero, index) => (
          <div
            key={Hero.key}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentHero 
                ? 'opacity-100 z-10 translate-x-0' 
                : index < currentHero
                  ? 'opacity-0 z-0 -translate-x-full'
                  : 'opacity-0 z-0 translate-x-full'
            }`}
          >
            <Hero.component fitMode="cover" />
          </div>
        ))}
      </div>

      {/* Progress Bar & Pause/Play Button */}
      {/* Slide Selectors (now large bars with progress) */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-[280px] sm:w-[320px] max-w-[90vw] flex items-center gap-2">
        <div className="flex-1 flex items-center gap-2">
          {heroes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualChange(index)}
              className={`relative flex-1 h-1.5 sm:h-2 rounded-full transition-all duration-300 overflow-hidden shadow-lg ${
                index === currentHero
                  ? PROGRESS_COLORS[index]
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`View ${index === 0 ? 'main' : index === 1 ? 'services' : 'insights'} hero`}
            >
              {/* Progress animation for current bar */}
              {index === currentHero && (
                <div
                  className={`absolute left-0 top-0 h-full rounded-full bg-white/70 mix-blend-lighten pointer-events-none`}
                  style={{ width: `${progress * 100}%`, transition: paused ? 'none' : 'width 0.2s linear' }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPaused((p) => !p)}
          className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-blue-700 shadow transition-colors"
          aria-label={paused ? 'Play' : 'Pause'}
        >
          {paused ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <polygon points="6,4 20,12 6,20" fill="currentColor" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
} 