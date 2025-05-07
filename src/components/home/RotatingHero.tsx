'use client';

import { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import ServicesHero from '../services/ServicesHero';
import InsightsHero from '../insights/InsightsHero';
import { useMenu } from '@/context/MenuContext';

const SLIDE_DURATION = 5000; // 5 seconds
const GOLD_GRADIENT = 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]';
const INACTIVE_BAR = 'bg-[#E0F7FF]';

export default function RotatingHero() {
  const { isMobileMenuOpen } = useMenu();
  const [currentHero, setCurrentHero] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroes = [
    { component: HeroSection, key: 'main' },
    { component: ServicesHero, key: 'services' },
    { component: InsightsHero, key: 'insights' }
  ];

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
    } else if (isRightSwipe) {
      setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
    }
    
    setProgress(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Autoplay logic
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

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

  // Manual slide change
  const handleManualChange = (idx: number) => {
    setCurrentHero(idx);
    setProgress(0);
  };

  return (
    <div 
      className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Render all hero components, only show the active one */}
      <div className="relative w-full h-full">
        <div className={currentHero === 0 ? 'block' : 'hidden'}>
          <HeroSection fitMode="cover" isActive={currentHero === 0} />
        </div>
        <div className={currentHero === 1 ? 'block' : 'hidden'}>
          <ServicesHero fitMode="cover" isActive={currentHero === 1} />
        </div>
        <div className={currentHero === 2 ? 'block' : 'hidden'}>
          <InsightsHero fitMode="cover" isActive={currentHero === 2} />
        </div>
      </div>
      {/* Progress Bar & Pause/Play Button */}
      {!isMobileMenuOpen && (
        <div className="absolute bottom-8 sm:bottom-16 left-[10%] sm:left-[15%] portrait:left-6 z-50 w-[280px] sm:w-[320px]">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2">
              {heroes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`relative flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden shadow-lg ${
                    index === currentHero
                      ? GOLD_GRADIENT
                      : INACTIVE_BAR
                  }`}
                  aria-label={`View ${index === 0 ? 'main' : index === 1 ? 'services' : 'insights'} hero`}
                >
                  {/* Progress animation for current bar */}
                  {index === currentHero && (
                    <div
                      className={`absolute left-0 top-0 h-full rounded-full ${GOLD_GRADIENT} pointer-events-none`}
                      style={{ width: `${progress * 100}%` }}
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
      )}
    </div>
  );
} 