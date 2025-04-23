import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Managed IT Services | Symbol Technologies',
  description: 'Comprehensive managed IT services including infrastructure management, help desk support, and IT consulting.',
};

export default function ManagedServicesPage() {
  return (
    <PageWrapper>
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3 mb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Managed Services</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-blue-900">
          <Image
            src="/images/managed/hero_desktop.jpg"
            alt="Managed Services"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Managed IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8">
              Comprehensive IT management and support to keep your business running smoothly and efficiently.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Managed Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">IT Infrastructure Management</h3>
              <p className="text-gray-600 mb-4">
                Proactive monitoring and management of your entire IT infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Help Desk Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 technical support and issue resolution for your team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance and planning for your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your business.
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
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions for your business needs.
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
          </div>
          <div className="text-center mt-8">
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
    </PageWrapper>
  );
} 