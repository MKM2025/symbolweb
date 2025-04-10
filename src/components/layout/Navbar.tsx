'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../common/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo className="py-2" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-blue-600">
              Partners
            </Link>
            <Link href="/about-us" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/insights" className="text-gray-600 hover:text-blue-600">
              Insights
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100 py-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/partners" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/insights" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="/contact-us" 
              className="text-gray-600 hover:text-blue-600 px-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 