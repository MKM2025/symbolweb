'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/common/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeAll = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    closeAll();
  }, [closeAll]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/images/symbollogo.svg" 
                alt="Symbol Logo" 
                width={150} 
                height={40} 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link href="/services" className="text-gray-700 group-hover:text-blue-600">
                  Services
                </Link>
                <button className="ml-2 text-gray-700 group-hover:text-blue-600 focus:outline-none">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Cybersecurity
                </Link>
                <Link href="/services/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Cloud Infrastructure
                </Link>
                <Link href="/services/managed-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Managed Services
                </Link>
              </div>
            </div>

            <Link href="/clients" className="text-gray-700 hover:text-blue-600">
              Our Clients
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-blue-600">
              Partners
            </Link>

            {/* Insights Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link href="/insights" className="text-gray-700 group-hover:text-blue-600">
                  Insights
                </Link>
                <button className="ml-2 text-gray-700 group-hover:text-blue-600 focus:outline-none">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/insights/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blogs
                </Link>
                <Link href="/insights/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Case Studies
                </Link>
                <Link href="/insights/white-papers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  White Papers
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            
            {/* Services Menu - Updated to match Insights style */}
            <div className="space-y-1">
              <Link href="/services" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Services
              </Link>
              <Link 
                href="/services/cybersecurity" 
                onClick={handleMenuItemClick}
                className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Cybersecurity
              </Link>
              <Link 
                href="/services/cloud-infrastructure" 
                onClick={handleMenuItemClick}
                className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Cloud Infrastructure
              </Link>
              <Link 
                href="/services/managed-services" 
                onClick={handleMenuItemClick}
                className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Managed Services
              </Link>
            </div>

            <Link href="/clients" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Our Clients
            </Link>
            <Link href="/partners" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Partners
            </Link>

            {/* Keep existing Insights Menu as is */}
            <div className="space-y-1">
              <Link href="/insights" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Insights
              </Link>
              <Link href="/insights/blogs" onClick={handleMenuItemClick} className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Blogs
              </Link>
              <Link href="/insights/case-studies" onClick={handleMenuItemClick} className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Case Studies
              </Link>
              <Link href="/insights/white-papers" onClick={handleMenuItemClick} className="block pl-6 py-2 text-gray-700 hover:bg-gray-100 rounded">
                White Papers
              </Link>
            </div>

            <Link href="/about" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About Us
            </Link>
            <Link href="/contact" onClick={handleMenuItemClick} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 