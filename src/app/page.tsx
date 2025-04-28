import Image from 'next/image';
import Link from 'next/link';
import RotatingHero from '@/components/home/RotatingHero';
import TechnologyPartnersSection from '@/components/home/TechnologyPartnersSection';

export default function Home() {
  return (
    <main className="relative">
      <RotatingHero />
      <TechnologyPartnersSection />

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Leading ICT Solutions Provider in Addis Ababa, Ethiopia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We combine deep technical expertise, strategic partnerships with global leaders, and an 
              AI-driven approach to deliver secure, scalable, and future-ready systems. From robust 
              cybersecurity defenses and advanced FinTech solutions to cloud transformation and 
              resilient infrastructure, we provide the end-to-end capabilities you need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive ICT Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/cybersecurity" className="group block bg-white p-8 rounded-xl shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:scale-105 focus:outline-none">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-900 transition-colors">Cybersecurity</h3>
              <p className="text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                Advanced threat protection, security assessments, and compliance solutions.
              </p>
              <span className="inline-block mt-2 text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>

            <Link href="/services/cloud-infrastructure" className="group block bg-white p-8 rounded-xl shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:scale-105 focus:outline-none">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-900 transition-colors">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                Cloud migration, infrastructure optimization, and managed services.
              </p>
              <span className="inline-block mt-2 text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>

            <Link href="/services/managed-services" className="group block bg-white p-8 rounded-xl shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:scale-105 focus:outline-none">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-900 transition-colors">Managed Services</h3>
              <p className="text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                24/7 monitoring, maintenance, and IT infrastructure management.
              </p>
              <span className="inline-block mt-2 text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our AI-driven solutions can help your organization stay ahead in the digital age.
          </p>
          <Link 
            href="/contact-us"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
