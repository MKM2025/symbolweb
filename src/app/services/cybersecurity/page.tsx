import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Cybersecurity Solutions | Symbol Technologies',
  description: 'Enterprise-grade cybersecurity solutions including threat protection, security assessments, and compliance management.',
};

export default function CybersecurityPage() {
  const services = [
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive protection against sophisticated cyber threats including malware, ransomware, and zero-day attacks.',
      features: [
        'Real-time threat detection and response',
        'AI-powered security analytics',
        'Advanced endpoint protection',
        'Network security monitoring',
        'Threat intelligence integration'
      ]
    },
    {
      title: 'Security Assessment & Compliance',
      description: 'Proactive security assessments and compliance management to protect your business and meet regulatory requirements.',
      features: [
        'Vulnerability assessments',
        'Penetration testing',
        'Compliance audits (GDPR, ISO 27001, etc.)',
        'Security posture evaluation',
        'Risk management consulting'
      ]
    },
    {
      title: 'Managed Security Services',
      description: '24/7 security monitoring and management to ensure continuous protection of your digital assets.',
      features: [
        '24/7 Security Operations Center (SOC)',
        'Incident response management',
        'Security event monitoring',
        'Threat hunting',
        'Regular security reporting'
      ]
    }
  ];

  return (
    <PageWrapper>
      <div className="pt-6">
        <h1 className="text-4xl font-bold mb-12">Cybersecurity</h1>
        <main>
          {/* Hero Section */}
          <section className="relative -mt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Protect your business with enterprise-grade cybersecurity solutions. Our comprehensive approach 
                  combines advanced technology, expert knowledge, and proactive monitoring to keep your assets secure.
                </p>
                <Link 
                  href="/contact-us"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Why Choose Symbol Technologies</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                We combine industry expertise, cutting-edge technology, and proven methodologies to deliver 
                comprehensive cybersecurity solutions that protect your business.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certified security professionals with extensive experience in threat detection, 
                    incident response, and security architecture.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    State-of-the-art security tools and platforms powered by AI and machine learning 
                    for proactive threat detection.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Round-the-clock security operations center with real-time monitoring and 
                    immediate incident response capabilities.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Compliance Ready</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive compliance management ensuring adherence to industry standards 
                    and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-600 text-white -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let's discuss how our cybersecurity solutions can protect your business and ensure your peace of mind.
              </p>
              <Link 
                href="/contact-us"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Schedule a Security Consultation
              </Link>
            </div>
          </section>
        </main>
      </div>
    </PageWrapper>
  );
} 