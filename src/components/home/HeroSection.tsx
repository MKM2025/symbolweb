'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Shape Your Future with AI-Driven ICT & Cybersecurity Solutions
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                Empowering organizations worldwide to navigate complexity, mitigate risk, and unlock growth in the digital age
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl h-[56px]"
              >
                Talk to Our Experts
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors duration-200 h-[56px]"
              >
                Explore our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 