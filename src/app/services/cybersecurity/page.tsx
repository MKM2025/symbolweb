import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Cybersecurity Solutions | Symbol Technologies',
  description: 'Enterprise-grade cybersecurity solutions including threat protection, security assessments, and compliance management.',
};

export default function CybersecurityPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-blue-900">
          <Image
            src="/images/cybersecurity/hero_desktop.jpg"
            alt="Cybersecurity"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Secure Your Organization Today
            </h1>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Learn More About ST - CyberSOC Team
            </Link>
          </div>
        </div>
      </section>

      {/* Basic Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Cybersecurity Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">Advanced Threat Protection</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">Security Assessment</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">Managed Security</h3>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 