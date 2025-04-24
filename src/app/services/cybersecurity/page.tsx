import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Cybersecurity Solutions | Symbol Technologies',
  description: 'Enterprise-grade cybersecurity solutions including threat protection, security assessments, and compliance management.',
};

export default function CybersecurityPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 -mt-[80px]">
        <div className="absolute inset-0">
          <Image
            src="/images/cybersecurity/hero_desktop.jpg"
            alt="Cybersecurity"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Comprehensive security solutions to protect your business from evolving digital threats.
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Cybersecurity Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Advanced Threat Protection</h3>
              <p className="text-gray-600">
                24/7 monitoring and protection against sophisticated cyber threats and attacks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Security Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your security posture and vulnerability testing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Managed Security</h3>
              <p className="text-gray-600">
                End-to-end security management and incident response services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-3">
                Scalable and secure cloud solutions for your business needs.
              </p>
              <Link 
                href="/services/cloud-infrastructure"
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
          <div className="flex justify-center">
            <Link 
              href="/services"
              className="inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-800 font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}