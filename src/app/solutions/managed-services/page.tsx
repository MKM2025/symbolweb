import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Managed IT Solutions | Symbol Technologies',
  description: 'Comprehensive managed IT solutions including infrastructure management, help desk support, and IT consulting.',
};

export default function ManagedSolutionsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/managed/hero_desktop.webp"
            alt="Managed Solutions"
            fill
            priority
            className="object-cover"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Managed IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Comprehensive IT management and support to keep your business running smoothly and efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#solutions"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Content */}
      <section id="scroll-target" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Managed Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">IT Infrastructure Management</h3>
              <p className="text-gray-600">
                Proactive monitoring and management of your entire IT infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Help Desk Support</h3>
              <p className="text-gray-600">
                24/7 technical support and issue resolution for your team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance and planning for your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Solutions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-3">
                Comprehensive security solutions to protect your business.
              </p>
              <Link 
                href="/solutions/cybersecurity"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-3">
                Scalable cloud solutions for your business needs.
              </p>
              <Link 
                href="/solutions/cloud-infrastructure"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link 
              href="/solutions"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 