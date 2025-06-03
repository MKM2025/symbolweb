'use client';
import Image from 'next/image';
import Link from 'next/link';
import RotatingHero from '@/components/home/RotatingHero';
import TechnologyPartnersSection from '@/components/home/TechnologyPartnersSection';
import AnimatedCounter from '@/components/home/AnimatedCounter';
import { motion } from 'framer-motion';

// Copy bpoCategories from src/app/bpo/page.tsx
const bpoCategories = [
  { title: 'Contact Center Services', href: '/bpo/contact-center', icon: '📞' },
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

// Data for the Comprehensive ICT Solutions section, matching /solutions page structure
const ictSolutions = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business resilience.',
    image: '/images/solutions/cybersec-preview.webp',
    link: '/solutions/cybersecurity'
  },
  {
    id: 'fintech',
    title: 'Financial Technology',
    description: 'Specialized solutions for financial institutions to enhance security, compliance, and operational efficiency.',
    image: '/images/solutions/fintech-preview.webp',
    link: '/solutions/fintech'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.',
    image: '/images/solutions/cloud-preview.webp',
    link: '/solutions/cloud-infrastructure'
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    description: 'Comprehensive solutions to ensure business continuity and rapid recovery from disruptions.',
    image: '/images/solutions/business-continiuty-preview.webp',
    link: '/solutions/business-continuity'
  },
  {
    id: 'grc',
    title: 'Governance, Risk & Compliance',
    description: 'Integrated solutions for effective governance, risk management, and compliance.',
    image: '/images/solutions/government-risk-compliance-preview.webp',
    link: '/solutions/grc'
  },
  {
    id: 'data-ai',
    title: 'Data, AI & Intelligence',
    description: 'Harness the power of data and AI to drive innovation and informed decision-making.',
    image: '/images/solutions/data-ai-preview.webp',
    link: '/solutions/data-ai'
  },
  {
    id: 'managed-services',
    title: 'Managed IT Services',
    description: 'Comprehensive managed services to optimize operations and focus on innovation.',
    image: '/images/solutions/managed-it-services-preview.webp',
    link: '/solutions/managed-services'
  },
  {
    id: 'digital-training',
    title: 'Digital Solutions & Training',
    description: 'Empowering your workforce with cutting-edge digital solutions and comprehensive training programs.',
    image: '/images/solutions/digital-preview.webp',
    link: '/solutions/digital-training'
  }
];

export default function Home() {
  return (
    <main className="relative">
      <RotatingHero />

      {/* Intro Section */}
      <motion.section 
        id="intro-section" 
        className="py-16 relative overflow-hidden scroll-mt-[96px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0a2a4a]/50 rounded-full blur-2xl"></div>
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-[#0a192f]/95 to-[#0a2a4a]/95 backdrop-blur-sm rounded-2xl border border-[#FFD700]/20 shadow-2xl overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent animate-gradient-x"></div>
              
              <div className="p-8 md:p-12 relative">
                {/* Inner Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                
                <div className="flex flex-col items-center space-y-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center w-full max-w-5xl"
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold text-[#FFF9C4] mb-4 relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <span className="relative inline-block">
                        Leading ICT Solutions Provider in Addis Ababa, Ethiopia
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </span>
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col space-y-6 text-gray-200 text-lg w-full max-w-4xl"
                  >
                    <motion.p 
                      className="leading-relaxed text-justify"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                      We combine deep technical expertise, strategic partnerships with global leaders, and an 
                      AI-driven approach to deliver secure, scalable, and future-ready systems. From robust 
                      cybersecurity defenses and advanced FinTech solutions to cloud transformation and 
                      resilient infrastructure, we provide the end-to-end capabilities you need to thrive.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-br from-[#FFD700] via-[#FFE5A0] to-[#FFF9C4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm"
                    >
                      <span className="text-2xl md:text-3xl mb-2 text-[#0a192f]">💼</span>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
                        <AnimatedCounter end={15} suffix="+" />
                      </div>
                      <div className="text-[#0a192f] text-sm md:text-base font-medium">Years in Tech</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-br from-[#FFD700] via-[#FFE5A0] to-[#FFF9C4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm"
                    >
                      <span className="text-2xl md:text-3xl mb-2 text-[#0a192f]">👨‍💻</span>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <div className="text-[#0a192f] text-sm md:text-base font-medium">Work force</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-br from-[#FFD700] via-[#FFE5A0] to-[#FFF9C4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm"
                    >
                      <span className="text-2xl md:text-3xl mb-2 text-[#0a192f]">🤝</span>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
                        <AnimatedCounter end={100} suffix="+" />
                      </div>
                      <div className="text-[#0a192f] text-sm md:text-base font-medium">Satisfied Customers</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-br from-[#FFD700] via-[#FFE5A0] to-[#FFF9C4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm"
                    >
                      <span className="text-2xl md:text-3xl mb-2 text-[#0a192f]">🏆</span>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
                        <AnimatedCounter end={8} suffix="+" />
                      </div>
                      <div className="text-[#0a192f] text-sm md:text-base font-medium">Awards</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-br from-[#FFD700] via-[#FFE5A0] to-[#FFF9C4] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm"
                    >
                      <span className="text-2xl md:text-3xl mb-2 text-[#0a192f]">🌐</span>
                      <div className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
                        <AnimatedCounter end={300000} suffix="+" />
                      </div>
                      <div className="text-[#0a192f] text-sm md:text-base font-medium">Users in Networks we Built</div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link 
                      href="/about-us"
                      className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95"
                    >
                      Learn More About Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Partners Section */}
      <section className="bg-white">
        <TechnologyPartnersSection />
      </section>

      {/* BPO Section */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0a2a4a]/50 rounded-full blur-2xl"></div>
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-[#0a192f]/95 to-[#0a2a4a]/95 backdrop-blur-sm rounded-2xl border border-[#FFD700]/20 shadow-2xl overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent animate-gradient-x"></div>
              
              <div className="p-8 md:p-12 relative">
                {/* Inner Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                
                <div className="flex flex-col items-center space-y-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center w-full max-w-5xl"
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold text-[#FFF9C4] mb-4 relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <span className="relative inline-block">
                        Business Process Outsourcing (BPO)
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </span>
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col space-y-6 text-gray-200 text-lg w-full max-w-4xl"
                  >
                    <motion.p 
                      className="leading-relaxed text-center"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                      Explore our full range of BPO services below. Click or tap on any service to learn more about how we can help optimize your business operations.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl"
                  >
                    {bpoCategories.map((cat, index) => (
                      <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                      >
                        <Link
                          href="/bpo"
                          className="group block bg-gradient-to-br from-[#FFF9D4]/10 via-[#FFF9E6]/10 to-[#FFF9F2]/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-[#FFE5A0]/20 backdrop-blur-sm h-full hover:from-[#FFD700] hover:via-[#FFE5A0] hover:to-[#FFF9C4]"
                        >
                          <span className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FFF9C4] group-hover:text-[#0a192f]">{cat.icon}</span>
                          <span className="text-sm md:text-base font-medium text-[#FFF9C4] text-center group-hover:text-[#0a192f] transition-colors">{cat.title}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link
                      href="/bpo"
                      className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95"
                    >
                      Explore All BPO Services
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
            {ictSolutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <Link href={sol.link} className="group block bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] focus:outline-none transition-all duration-200 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors overflow-hidden">
                  {sol.image && <Image src={sol.image} alt={sol.title} width={48} height={48} className="w-full h-full object-cover" />}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-blue-900 transition-colors">{sol.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 group-hover:text-blue-900 transition-colors">
                    {sol.description}
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

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </main>
  );
}
