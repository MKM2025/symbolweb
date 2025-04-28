'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  name: string;
  href: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  isShow: boolean;
  setShow: (show: boolean) => void;
  href: string;
}

// Generic dropdown menu component
const DropdownMenu = ({ title, items, isShow, setShow, href }: DropdownMenuProps) => (
  <div 
    className="relative group"
    onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setTimeout(() => setShow(false), 100)}
  >
    <div className="text-white group-hover:text-[#FFD700] px-3 py-2 text-sm font-medium inline-flex items-center cursor-pointer">
      <Link href={href} className="inline-flex items-center">
        {title}
        <svg 
          className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </div>

    {isShow && (
      <div 
        className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-[#0a2a4a] ring-1 ring-black ring-opacity-5"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="py-1" role="menu" aria-orientation="vertical">
          {items.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-gray-100 hover:text-[#FFE5A0] bg-[#0a2a4a] hover:bg-[#0a2a4a] transition-colors duration-150 hover:drop-shadow-[0_0_3px_rgba(255,229,160,0.3)]"
              role="menuitem"
              onClick={() => setShow(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const menuItems = {
    services: [
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
      { name: 'Managed Services', href: '/services/managed-services' }
    ],
    insights: [
      { name: 'Blogs', href: '/insights/blogs' },
      { name: 'Case Studies', href: '/insights/case-studies' },
      { name: 'White Papers', href: '/insights/white-papers' }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a2a4a] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link href="/">
              <Image 
                src="/images/symbollogo.svg" 
                alt="Symbol Logo" 
                width={180} 
                height={48}
                className="brightness-125 contrast-110 saturate-150 drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FFD700]">
              Home
            </Link>
            
            <DropdownMenu 
              title="Services"
              items={menuItems.services}
              isShow={showServices}
              setShow={setShowServices}
              href="/services"
            />

            <Link href="/bpo" className="text-white hover:text-[#FFD700]">
              BPO
            </Link>

            <Link href="/clients" className="text-white hover:text-[#FFD700]">
              Our Clients
            </Link>

            <Link href="/partners" className="text-white hover:text-[#FFD700]">
              Partners
            </Link>

            <DropdownMenu 
              title="Insights"
              items={menuItems.insights}
              isShow={showInsights}
              setShow={setShowInsights}
              href="/insights"
            />

            <Link href="/about" className="text-white hover:text-[#FFD700]">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FFD700]">
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Services
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showServices && (
                <div className="pl-4 space-y-1">
                  {menuItems.services.map((item) => (
              <Link 
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
              </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/bpo" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              BPO
            </Link>

            <Link 
              href="/clients" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Our Clients
            </Link>

            <Link 
              href="/partners" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowInsights(!showInsights)}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Insights
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${showInsights ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showInsights && (
                <div className="pl-4 space-y-1">
                  {menuItems.insights.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
              </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 