'use client';

import Image from 'next/image';
import Link from 'next/link';

const bpoCategories = [
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

export default function BPOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/bpo/hero_bpo_desktop.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/images/bpo/hero_bpo_mobile.webp"
              type="image/webp"
            />
            <img
              src="/images/bpo/hero_bpo_desktop.webp"
              alt="BPO Hero Background"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </picture>
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        {/* Oval icon arrangement (no lines) */}
        <div className="relative w-full h-full max-w-6xl mx-auto hidden md:block">
          {bpoCategories.map((category, i) => {
            const angle = (i / bpoCategories.length) * 2 * Math.PI;
            const rx = 0.85; // horizontal radius as a fraction of width
            const ry = 0.65; // vertical radius as a fraction of height
            const x = 50 + Math.cos(angle) * 45 * rx;
            const y = 50 + Math.sin(angle) * 40 * ry;
            return (
              <Link
                key={category.title}
                href={category.href}
                className="absolute flex flex-col items-center group hover:text-yellow-400 transition-colors"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2
                }}
              >
                <span className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform bg-white/20 rounded-full p-4 shadow-lg backdrop-blur">
                  {category.icon}
                </span>
                <span className="text-xs md:text-base text-center group-hover:text-yellow-400 transition-colors whitespace-nowrap drop-shadow">
                  {category.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile icon grid */}
        <div className="grid grid-cols-3 gap-4 px-4 md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
          {bpoCategories.slice(0, 6).map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="flex flex-col items-center group hover:text-yellow-400 transition-colors"
            >
              <span className="text-2xl mb-1 group-hover:scale-110 transition-transform bg-white/20 rounded-full p-2 shadow-lg backdrop-blur">
                {category.icon}
              </span>
              <span className="text-[10px] text-center group-hover:text-yellow-400 transition-colors">
                {category.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Center text */}
        <div className="absolute left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 text-center z-10 w-[90%] sm:w-[80%] md:w-[60%]">
          <h1 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg text-yellow-300">Business Process Outsourcing</h1>
          <p className="text-sm md:text-xl text-blue-100 mb-0 drop-shadow">
            Providing a range of services to optimize and manage your business processes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our BPO Services</h2>
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{category.title}</h3>
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
                <Link
                  href={category.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group text-sm sm:text-base"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Partner with us for innovative solutions that drive growth and efficiency
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 