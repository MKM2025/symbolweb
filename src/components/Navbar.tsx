'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Add these type definitions at the top of the file
interface MenuItem {
  name: string;
  href: string;
}

interface MenuItems {
  services: MenuItem[];
  partners: MenuItem[];
  insights: MenuItem[];
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  isShow: boolean;
  setShow: (show: boolean) => void;
  href: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const menuItems = {
    services: [
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
      { name: 'Managed Services', href: '/services/managed-services' }
    ],
    partners: [
      { name: 'Technology Partners', href: '/partners/technology' },
      { name: 'Solution Partners', href: '/partners/solution' },
      { name: 'Partner Program', href: '/partners/program' }
    ],
    insights: [
      { name: 'Blog', href: '/insights/blog' },
      { name: 'Case Studies', href: '/insights/case-studies' },
      { name: 'White Papers', href: '/insights/white-papers' },
      { name: 'News & Events', href: '/insights/news-events' }
    ]
  };

  // Generic dropdown menu component
  const DropdownMenu = ({ title, items, isShow, setShow, href }: DropdownMenuProps) => (
    <div 
      className="relative group"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setTimeout(() => setShow(false), 100)}
    >
      <div className="text-gray-700 group-hover:text-blue-600 px-3 py-2 text-sm font-medium inline-flex items-center cursor-pointer">
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
          className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
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

  return (
    <nav className="bg-[#050c16] shadow-sm fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Symbol Technologies"
                width={180}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            
            <DropdownMenu 
              title="Services"
              items={menuItems.services}
              isShow={showServices}
              setShow={setShowServices}
              href="/services"
            />

            <DropdownMenu 
              title="Partners"
              items={menuItems.partners}
              isShow={showPartners}
              setShow={setShowPartners}
              href="/partners"
            />

            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About Us
            </Link>

            <DropdownMenu 
              title="Insights"
              items={menuItems.insights}
              isShow={showInsights}
              setShow={setShowInsights}
              href="/insights"
            />

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#050c16]">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div className="relative">
              <div className="flex flex-col">
                <Link
                  href="/services"
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
                >
                  View All Services
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
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

            <div className="relative">
              <button
                onClick={() => setShowPartners(!showPartners)}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Partners
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${showPartners ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showPartners && (
                <div className="pl-4 space-y-1">
                  {menuItems.partners.map((item) => (
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
              href="/about-us" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
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

export default Navbar; 