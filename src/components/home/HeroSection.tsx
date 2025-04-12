'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full mt-0" style={{ height: '600px' }}>
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_desktop.jpg"
          alt="Hero section representing AI and cybersecurity"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: 'center center'
          }}
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,28,77,0.9) 0%, rgba(0,28,77,0.8) 40%, rgba(0,28,77,0) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Shape Your Future with AI-Driven ICT & Cybersecurity Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Empowering organizations worldwide to navigate complexity, mitigate risk, and unlock growth in the digital age
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 