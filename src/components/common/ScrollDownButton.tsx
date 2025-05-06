"use client";

import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollTarget = document.getElementById("scroll-target");
    if (!scrollTarget) return;

    const handleScroll = () => {
      const rect = scrollTarget.getBoundingClientRect();
      // Show if the top of the target is below the top of the viewport (not yet reached)
      setShow(rect.top > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollTarget = document.getElementById("scroll-target");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed left-1/2 bottom-2 -translate-x-1/2 z-50 bg-white/80 hover:bg-white shadow-lg rounded-full p-1.5 transition-all duration-200 group"
      aria-label="Scroll Down"
      type="button"
    >
      <div className="flex flex-col items-center">
        <svg className="w-4 h-4 text-blue-700 mb-[-4px] animate-bounce" style={{ animationDelay: '0ms' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <svg className="w-4 h-4 text-blue-700 mb-[-4px] animate-bounce" style={{ animationDelay: '120ms' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <svg className="w-4 h-4 text-blue-700 animate-bounce" style={{ animationDelay: '240ms' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  );
} 