import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Cloud Infrastructure Solutions | Symbol Technologies',
  description: 'Enterprise cloud infrastructure solutions including cloud migration, optimization, and managed cloud services.',
};

export default function CloudInfrastructurePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 -mt-[80px]">
        <div className="absolute inset-0">
          <Image
            src="/images/cloud/hero_desktop.jpg"
            alt="Cloud Infrastructure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Cloud Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Scale your business with modern cloud solutions designed for enterprise performance and reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section id="services" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Cloud Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cloud Migration</h3>
              <p className="text-gray-600">
                Seamless transition of your applications and infrastructure to the cloud.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cloud Optimization</h3>
              <p className="text-gray-600">
                Maximize performance and minimize costs with our optimization services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Managed Cloud</h3>
              <p className="text-gray-600">
                End-to-end management of your cloud infrastructure and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-3">
                Protect your cloud infrastructure with advanced security solutions.
              </p>
              <Link 
                href="/services/cybersecurity"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Managed Services</h3>
              <p className="text-gray-600 mb-3">
                Comprehensive IT management and support services.
              </p>
              <Link 
                href="/services/managed-services"
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
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 