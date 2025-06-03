'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bpoCategories = [
  {
    title: 'Contact Center Services',
    description: 'Professional, 24/7 multichannel support powered by our in-house Cisco infrastructure and integrated billing system.',
    href: '/bpo/contact-center',
    icon: '📞',
    services: [
      'Inbound & Outbound Call Handling',
      'Live Chat & Email Support',
      'Customer Service & Helpdesk Solutions',
      'Lead Generation & Appointment Setting',
      'Technical Support & Issue Resolution',
      'Available Onsite or Remote Deployment',
      'Hosted in Our Office with Cisco Contact Center & Billing System'
    ]
  },
  {
    title: 'Software Development',
    description: 'End-to-end software development services with expertise in multiple technologies.',
    href: '/bpo/software-development',
    icon: '💻',
    services: [
      'Full-Stack Development (Frontend + Backend)',
      'Frontend Development (React, Angular, Vue)',
      'Backend Development (Node.js, Python, Java, .NET)',
      'Mobile App Development (iOS, Android, Flutter)',
      'API Development & Integration',
      'QA & Automation Testing'
    ]
  },
  {
    title: 'Web Services',
    description: 'Comprehensive web development and optimization solutions.',
    href: '/bpo/web-services',
    icon: '🌐',
    services: [
      'Website Design & Development',
      'CMS Development (WordPress, Drupal, Joomla)',
      'eCommerce Solutions (Shopify, WooCommerce, Magento)',
      'Landing Page & Funnel Building',
      'Web Performance Optimization'
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Modern DevOps practices and infrastructure management.',
    href: '/bpo/devops-infrastructure',
    icon: '⚙️',
    services: [
      'CI/CD Pipeline Management',
      'Cloud Infrastructure Management (AWS, Azure, GCP)',
      'Server Administration',
      'Infrastructure as Code (Terraform, Ansible)',
      'Containerization (Docker, Kubernetes)'
    ]
  },
  {
    title: 'Technical Support',
    description: '24/7 technical support and maintenance services.',
    href: '/bpo/technical-support',
    icon: '🛠️',
    services: [
      'Remote IT Support',
      'Helpdesk Services',
      '24/7 System Monitoring',
      'Patch Management & Updates',
      'Troubleshooting & Bug Fixes'
    ]
  },
  {
    title: 'Network & Security',
    description: 'Comprehensive network and security solutions.',
    href: '/bpo/network-security',
    icon: '🔒',
    services: [
      'Network Configuration & Monitoring',
      'Firewall & VPN Setup',
      'Cybersecurity Services',
      'Penetration Testing & Risk Assessment',
      'Data Backup & Disaster Recovery'
    ]
  },
  {
    title: 'AI & Automation',
    description: 'Cutting-edge AI and automation solutions.',
    href: '/bpo/ai-automation',
    icon: '🤖',
    services: [
      'AI Agent Deployment',
      'Chatbots and Virtual Assistants',
      'Business Process Automation (RPA, n8n, Make)',
      'AI-Powered Data Processing',
      'Custom ML Model Development'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Creative design services for digital products.',
    href: '/bpo/ui-ux-design',
    icon: '🎨',
    services: [
      'UI Design (Web & Mobile)',
      'UX Research & Prototyping',
      'Figma/Adobe XD/Sketch Services',
      'Graphic Design & Branding'
    ]
  },
  {
    title: 'Data Services',
    description: 'Comprehensive data management and analytics solutions.',
    href: '/bpo/data-services',
    icon: '📊',
    services: [
      'Data Entry & Cleansing',
      'Data Labeling for AI',
      'Database Management & Optimization',
      'Analytics & BI Reporting'
    ]
  },
  {
    title: 'Dedicated Teams',
    description: 'Custom team augmentation and dedicated development centers.',
    href: '/bpo/dedicated-teams',
    icon: '👥',
    services: [
      'Team Augmentation (Developers, Designers, QA, DevOps)',
      'Dedicated Tech Teams for Agencies',
      'Custom Offshore Development Centers'
    ]
  }
];

function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    function check() {
      setIsLandscape(window.matchMedia('(orientation: landscape) and (max-width: 1024px)').matches);
    }
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isLandscape;
}

export default function BPOPage() {
  const isLandscape = useIsLandscape();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full max-w-[1920px] mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/bpo/hero_bpo_desktop.webp"
            alt="BPO Services Hero"
            fill
            priority
            className="object-cover object-center hidden md:block"
            quality={90}
            sizes="100vw"
          />
          <Image
            src="/images/bpo/hero_bpo_mobile.webp"
            alt="BPO Services Hero"
            fill
            priority
            className="object-cover object-center md:hidden"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative h-full w-full grid grid-rows-[90%_10%] md:flex md:flex-col md:justify-center">
          {/* Upper row: CTA content */}
          <div className="flex flex-col items-center px-4 row-span-1 md:block h-full pt-6 md:pt-0">
            <div className="max-w-2xl ml-0 md:ml-12 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] portrait:pr-8 w-full flex flex-col justify-center items-center h-full text-center md:items-start md:text-left md:justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-[clamp(2rem,8vw,2.8rem)] sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight w-full text-center md:text-left"
              >
                Empowering Global Businesses with Next-Gen ICT & BPO Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-[clamp(1.2rem,5vw,2rem)] sm:text-2xl md:text-xl text-[#FFF9C4] mb-2 sm:mb-3 md:mb-4 drop-shadow-md font-semibold w-full text-center md:text-left"
              >
                Streamline operations, enhance customer experience, and scale effortlessly with our cutting-edge IT support, automation, and back-office outsourcing services.
              </motion.p>
            </div>
          </div>
          {/* Bottom row: sliding bar and down arrow (mobile only) */}
          <div className="flex flex-col items-center justify-end row-span-1 w-full h-full md:hidden">
            {/* These will be slotted in by RotatingHero, but you can add placeholders or ensure space is reserved here if needed */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="scroll-target" className="bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              Our BPO Services
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions tailored to meet your specific needs and drive your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {bpoCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-4 sm:p-6 flex flex-col"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
                >
                  {category.title}
                </motion.h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">{category.description}</p>
                <div className="flex-grow">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex items-start text-sm sm:text-base">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#f3f6fb' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-[#0a2a4a] mb-6 sm:mb-8 max-w-2xl mx-auto px-4 text-center">
            Outsource with confidence — partner with us to unlock smart, scalable BPO and ICT solutions that accelerate growth, boost efficiency, and free your team to focus on what matters most.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto bg-[#0a2a4a] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-colors text-center"
            style={{ color: '#FFD700' }}
          >
            Contact Sales
          </Link>
        </div>
      </motion.section>
    </main>
  );
} 