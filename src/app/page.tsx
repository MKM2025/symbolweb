'use client';
import Image from 'next/image';
import Link from 'next/link';
import RotatingHero from '@/components/home/RotatingHero';
import TechnologyPartnersSection from '@/components/home/TechnologyPartnersSection';
import AnimatedCounter from '@/components/home/AnimatedCounter';
import { motion } from 'framer-motion';

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

      {/* Intro Section */}
      <section id="intro-section" className="py-6 md:py-12 bg-[#f1f5fb] scroll-mt-[96px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto w-full text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0a2a4a]"
            >
              Leading ICT Solutions Provider in Addis Ababa, Ethiopia
            </motion.h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-10">
              We combine deep technical expertise, strategic partnerships with global leaders, and an 
              AI-driven approach to deliver secure, scalable, and future-ready systems. From robust 
              cybersecurity defenses and advanced FinTech solutions to cloud transformation and 
              resilient infrastructure, we provide the end-to-end capabilities you need to thrive.
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8 w-full max-w-none justify-center items-center place-items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
              >
                <div className="text-[#FFD700]">
                  <AnimatedCounter end={40} suffix="+" />
                </div>
                <div className="text-[#0a2a4a] text-sm md:text-base">Clients Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
              >
                <div className="text-[#FFD700]">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-[#0a2a4a] text-sm md:text-base">Years in Tech</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
              >
                <div className="text-[#FFD700]">
                  <AnimatedCounter end={100000} suffix="+" />
                </div>
                <div className="text-[#0a2a4a] text-sm md:text-base">End Users Empowered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
              >
                <div className="text-[#FFD700]">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-[#0a2a4a] text-sm md:text-base">Employees</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
              >
                <div className="text-[#FFD700]">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <div className="text-[#0a2a4a] text-sm md:text-base">Projects Completed</div>
              </motion.div>
            </div>
            <Link 
              href="/aboutus"
              className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="bg-white">
        <TechnologyPartnersSection />
      </section>

      {/* BPO Section */}
      <section className="py-6 md:py-12 bg-[#f1f5fb]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0a2a4a]"
          >
            Business Process Outsourcing (BPO)
          </motion.h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore our full range of BPO services below. Click or tap on any service to learn more about how we can help optimize your business operations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-6">
            {bpoCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-[#0a2a51] text-[#FFE5A0] rounded-lg shadow hover:shadow-lg border border-blue-100 hover:bg-gradient-to-r hover:from-[#BF953F] hover:via-[#FCF6BA] hover:to-[#B38728] hover:text-[#0a2a51] p-3 md:p-4 flex flex-col items-center transition-all duration-200 group cursor-pointer"
              >
                <span className="text-xl md:text-2xl mb-2 group-hover:text-[#FFE5A0] transition-colors">{cat.icon}</span>
                <span className="text-xs md:text-sm font-semibold text-center transition-colors">{cat.title}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/bpo"
            className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95"
          >
            Explore All BPO Services
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="scroll-target" className="py-6 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#0a2a4a]"
          >
            Comprehensive ICT Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[{
              href: "/solutions#security-solutions",
              icon: (
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Security Solutions",
              desc: "Comprehensive security solutions to protect your digital assets and ensure business resilience."
            }, {
              href: "/solutions#financial-technology",
              icon: (
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Financial Technology",
              desc: "Specialized solutions for financial institutions to manage risk, ensure compliance, and prevent financial crime."
            }, {
              href: "/solutions#cloud-infrastructure",
              icon: (
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Cloud & Infrastructure",
              desc: "Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation."
            }, {
              href: "/solutions#data-ai",
              icon: (
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              ),
              title: "Data, AI & Intelligence",
              desc: "Harness the power of data and artificial intelligence to drive innovation and make informed decisions."
            }, {
              href: "/solutions#managed-it",
              icon: (
                <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              ),
              title: "Managed IT Services",
              desc: "Comprehensive managed services to optimize operations and focus on innovation."
            }].map((sol, idx) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <Link href={sol.href} className="group block bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] focus:outline-none transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors">
                    {sol.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-900 transition-colors">{sol.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                    {sol.desc}
                  </p>
                  <span className="inline-block text-sm md:text-base text-blue-600 group-hover:text-blue-900 font-medium transition-colors">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-12 bg-[#f1f5fb]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-[#0a2a4a]"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto">
            Let's discuss how our AI-driven solutions can help your organization stay ahead in the digital age.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
