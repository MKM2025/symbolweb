'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMenu } from '@/context/MenuContext';

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
    <div className="text-white group-hover:text-[#FFD700] px-2 lg:px-3 py-2 text-sm lg:text-base font-medium inline-flex items-center cursor-pointer">
      <Link href={href} className="inline-flex items-center">
        {title}
        <svg 
          className="ml-1 w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:rotate-180" 
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
        className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-[#00101d] ring-1 ring-black ring-opacity-5 z-50"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="py-2 flex flex-col gap-y-0.5" role="menu" aria-orientation="vertical">
          {items.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm lg:text-base font-medium text-gray-100 hover:text-[#FFE5A0] bg-[#00101d] hover:bg-[#00101d] transition-colors duration-150 hover:drop-shadow-[0_0_3px_rgba(255,229,160,0.3)]"
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
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMenu();
  const [showSolutions, setShowSolutions] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const menuItems = {
    solutions: [
      { name: 'Security Solutions', href: '/solutions#security-solutions' },
      { name: 'Financial Technology Solutions', href: '/solutions#financial-technology' },
      { name: 'Cloud & Infrastructure', href: '/solutions#cloud-infrastructure' },
      { name: 'Data, AI & Intelligence', href: '/solutions#data-ai' },
      { name: 'Managed IT Services', href: '/solutions#managed-it' }
    ],
    insights: [
      { name: 'Blogs', href: '/insights/blogs' },
      { name: 'Case Studies', href: '/insights/case-studies' },
      { name: 'White Papers', href: '/insights/white-papers' }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00101d] z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[56px] sm:h-[64px] md:h-[96px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-start justify-start pt-1 sm:pt-2 md:pt-4">
            <Link href="/">
              <Image 
                src="/images/symbollogo.svg" 
                alt="Symbol Logo" 
                width={160} 
                height={48}
                className="brightness-125 contrast-110 saturate-150 drop-shadow-sm w-[140px] sm:w-[160px] md:w-[220px] -mb-2 sm:-mb-4"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              Home
            </Link>
            
            <DropdownMenu 
              title="Solutions"
              items={menuItems.solutions}
              isShow={showSolutions}
              setShow={setShowSolutions}
              href="/solutions"
            />

            <Link href="/bpo" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              BPO
            </Link>

            <Link href="/clients" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              Our Clients
            </Link>

            <Link href="/partners" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              Partners
            </Link>

            <DropdownMenu 
              title="Insights"
              items={menuItems.insights}
              isShow={showInsights}
              setShow={setShowInsights}
              href="/insights"
            />

            <Link href="/aboutus" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FFD700] text-sm lg:text-base">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
      <div 
        className={`md:hidden bg-[#00101d] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-14 left-0 right-0 bottom-0 z-40 min-h-screen`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 h-full overflow-y-auto bg-[#00101d]">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="relative">
            <button
              onClick={() => setShowSolutions(!showSolutions)}
              className="w-full text-left px-3 py-2 text-base font-medium text-white hover:text-[#FFD700] flex items-center justify-between"
            >
              Solutions
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showSolutions && (
              <div className="pl-4 space-y-1 bg-[#00101d]">
                {menuItems.solutions.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-white/90 hover:text-[#FFD700]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/bpo" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BPO
          </Link>

          <Link 
            href="/clients" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Clients
          </Link>

          <Link 
            href="/partners" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Partners
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowInsights(!showInsights)}
              className="w-full text-left px-3 py-2 text-base font-medium text-white hover:text-[#FFD700] flex items-center justify-between"
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
              <div className="pl-4 space-y-1 bg-[#00101d]">
                {menuItems.insights.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-white/90 hover:text-[#FFD700]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/aboutus" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 