import Image from 'next/image';
import Link from 'next/link';
import RotatingHero from '@/components/home/RotatingHero';
import TechnologyPartnersSection from '@/components/home/TechnologyPartnersSection';
import AnimatedCounter from '@/components/home/AnimatedCounter';

// Copy bpoCategories from src/app/bpo/page.tsx
const bpoCategories = [
  { title: 'Software Development', href: '/bpo/software-development', icon: '💻' },
  { title: 'Web Services', href: '/bpo/web-services', icon: '🌐' },
  { title: 'DevOps & Infrastructure', href: '/bpo/devops-infrastructure', icon: '⚙️' },
  { title: 'Technical Support', href: '/bpo/technical-support', icon: '🛠️' },
  { title: 'Network & Security', href: '/bpo/network-security', icon: '🔒' },
  { title: 'AI & Automation', href: '/bpo/ai-automation', icon: '🤖' },
  { title: 'UI/UX Design', href: '/bpo/ui-ux-design', icon: '🎨' },
  { title: 'Data Services', href: '/bpo/data-services', icon: '📊' },
  { title: 'Dedicated Teams', href: '/bpo/dedicated-teams', icon: '👥' },
];

export default function Home() {
  return (
    <main className="relative">
      <RotatingHero />
      <TechnologyPartnersSection />

      {/* Intro Section */}
      <section className="py-6 md:py-12 bg-gradient-to-l from-white to-[#cce1ff] dark:from-white dark:to-[#a3c5ff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0a2a4a]">
              Leading ICT Solutions Provider in Addis Ababa, Ethiopia
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-10">
              We combine deep technical expertise, strategic partnerships with global leaders, and an 
              AI-driven approach to deliver secure, scalable, and future-ready systems. From robust 
              cybersecurity defenses and advanced FinTech solutions to cloud transformation and 
              resilient infrastructure, we provide the end-to-end capabilities you need to thrive.
            </p>
            
            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <AnimatedCounter end={150} suffix="+" />
                <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <AnimatedCounter end={46} />
                <div className="text-gray-600 text-sm md:text-base">Satisfied Clients</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <AnimatedCounter end={34560} suffix="+" />
                <div className="text-gray-600 text-sm md:text-base">End Users Empowered</div>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-block w-full sm:w-auto bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-3 rounded-lg hover:bg-[#5885bd] transition-all duration-300 font-semibold shadow-md text-sm md:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* BPO Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0a2a4a]">Business Process Outsourcing (BPO)</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore our full range of BPO services below. Click or tap on any service to learn more about how we can help optimize your business operations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-6">
            {bpoCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white rounded-lg shadow hover:shadow-lg border border-blue-100 hover:bg-[#0a2a51] p-3 md:p-4 flex flex-col items-center transition-all duration-200 group cursor-pointer"
              >
                <span className="text-xl md:text-2xl mb-2 group-hover:text-[#FFE5A0] transition-colors">{cat.icon}</span>
                <span className="text-xs md:text-sm font-semibold group-hover:text-[#FFE5A0] text-center transition-colors">{cat.title}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/bpo"
            className="inline-block w-full sm:w-auto bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#5885bd] transition-colors"
          >
            Explore All BPO Services
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="scroll-target" className="py-6 md:py-12 bg-gradient-to-l from-white to-[#cce1ff] dark:from-white dark:to-[#a3c5ff]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#0a2a4a]">Comprehensive ICT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link href="/services/cybersecurity" className="group block bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] focus:outline-none transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-900 transition-colors">Cybersecurity</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                Advanced threat protection, security assessments, and compliance solutions.
              </p>
              <span className="inline-block text-sm md:text-base text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>

            <Link href="/services/cloud-infrastructure" className="group block bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] focus:outline-none transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-900 transition-colors">Cloud Solutions</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                Cloud migration, infrastructure optimization, and managed services.
              </p>
              <span className="inline-block text-sm md:text-base text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>

            <Link href="/services/managed-services" className="group block bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] focus:outline-none transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-900 transition-colors">Managed Services</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                24/7 monitoring, maintenance, and IT infrastructure management.
              </p>
              <span className="inline-block text-sm md:text-base text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-[#0a2a4a]">Ready to Transform Your Business?</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto">
            Let's discuss how our AI-driven solutions can help your organization stay ahead in the digital age.
          </p>
          <Link 
            href="/contact-us"
            className="inline-block w-full sm:w-auto bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#5885bd] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
