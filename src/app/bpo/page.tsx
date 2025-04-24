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
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="/images/bpo/hero.jpg"
            alt="BPO Services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Business Process Outsourcing
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
                Transform your business with our comprehensive tech & IT BPO services. 
                From development to support, we deliver excellence in every project.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
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
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 flex flex-col"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">{category.description}</p>
                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex items-start text-base">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={category.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
                >
                  Learn More
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
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