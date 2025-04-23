'use client';

import { useEffect, useState } from 'react';

export default function ScrollArrow() {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollAmount = Math.min(viewportHeight * 0.8, documentHeight - (currentScroll + viewportHeight));
    
    window.scrollTo({
      top: currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowUpArrow(window.scrollY > 200);
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
      setShowDownArrow(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 flex flex-col gap-4 z-50">
      {showUpArrow && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-purple-600 hover:to-indigo-700 group hover:rotate-12"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-7 h-7 text-white transform transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <div className="absolute inset-0 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      )}
      
      {showDownArrow && (
        <button
          onClick={scrollDown}
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-purple-600 hover:to-indigo-700 group hover:-rotate-12"
          aria-label="Scroll down"
        >
          <svg 
            className="w-7 h-7 text-white transform transition-transform duration-300 group-hover:translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <div className="absolute inset-0 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      )}
    </div>
  );
} 