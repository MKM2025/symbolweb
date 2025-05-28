'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const solutions = [
  {
    id: "security-solutions",
    section: "Security Solutions",
    description: "Comprehensive security solutions to protect your digital assets and ensure business resilience.",
    subsections: [
      {
        title: "Comprehensive Cybersecurity for a Resilient Digital Future",
        description: "The threat landscape is constantly evolving, requiring a proactive, intelligent, and integrated approach to security. Symbol Technologies delivers end-to-end cybersecurity solutions and services tailored to protect your critical assets, detect threats early, respond decisively, and ensure regulatory compliance. We harness AI-driven insights, cutting-edge technologies from leading partners such as Fortinet, Tenable, Imperva, Rapid7, F5, and Cisco, and the deep expertise of our ST-Cyber SOC team to help organizations across Africa build resilient and adaptive security postures.\n\nWe address a wide range of cybersecurity challenges. These include the increasing sophistication and frequency of attacks such as ransomware, phishing, and advanced persistent threats (APTs); the expanding attack surfaces resulting from cloud adoption, IoT, and remote work; and the complexity of compliance with regulatory frameworks. We also tackle the global shortage of skilled cybersecurity professionals, the urgent need for 24/7 monitoring and rapid incident response, and the critical importance of protecting sensitive data across hybrid IT environments.\n\nOur Cybersecurity Portfolio encompasses a full suite of services: Security Operations (SecOps) and Managed Security Services (MSSP), Exposure and Vulnerability Management, Network and Infrastructure Security, Cloud Security, Application Security, Data Security, Identity and Access Management (IAM), Endpoint Security, and Specialized Threat Detection and Prevention.",
        image: "/images/solutions/cybersecurity.webp",
        link: "/solutions/cybersecurity"
      },
      {
        title: "Intelligent Security Operations & 24/7 Managed Detection and Response",
        description: "Gain continuous visibility and expert oversight of your security posture with our comprehensive Security Operations and Managed Security Services, delivered through the ST-CyberSOC Team. We combine advanced technologies such as SIEM and SOAR with human expertise to provide proactive threat hunting, real-time monitoring, and rapid incident response.\n\nOur Security Operations Center (SOC) Solutions are designed to be fully customizable. We help organizations design, build, operate, and transfer (BOT) Security Operations Centers that are tailored to their unique needs. For clients seeking outsourced security operations, our Managed SOC (SOC-as-a-Service) delivers 24/7 monitoring and alerting, ensuring continuous surveillance of logs and network traffic. We also provide SIEM and SOAR as a service, leveraging powerful platforms for intelligent event correlation, automation, and orchestration. Incident triage and analysis are handled by seasoned experts who investigate and assess potential threats to minimize risks.\n\nWith Managed Detection and Response (MDR), we go beyond monitoring by offering proactive threat hunting services. Our team actively searches for indicators of compromise (IoCs) that may bypass automated systems. We provide advanced monitoring across endpoints, networks, and cloud environments using EDR, NDR, and XDR principles. Guided response and remediation are also included, offering expert assistance to contain and eradicate threats, often in collaboration with trusted partners like Rapid7.\n\nThreat Intelligence is another core component of our service offering. We deliver curated threat feeds and analysis, keeping you informed about relevant vulnerabilities, attacker tactics, and emerging risks. In the event of an incident, our Incident Response services ensure rapid action. We offer retainer and emergency CERT services for active breach management, along with digital forensics to trace attack vectors and determine the extent of impact.\n\nTo stay ahead of the curve, we integrate Generative AI into SOC operations, enhancing detection accuracy, speeding up investigation processes, and automating reports to improve efficiency and effectiveness.",
        image: "/images/solutions/cybersoc.webp",
        link: "/solutions/secops"
      },
      {
        title: "Proactively Reduce Your Attack Surface",
        description: "Understand and minimize your cyber risk by continuously identifying, prioritizing, and remediating vulnerabilities across your entire digital footprint. Our services utilize leading platforms like Tenable and Rapid7 to provide a unified view of your exposure, enabling a more effective and efficient security strategy.\n\nOur Vulnerability Assessment and Management services begin with comprehensive scanning to uncover vulnerabilities throughout your IT infrastructure, including cloud assets, web applications, containers, operational technology (OT), and Internet of Things (IoT) devices. We implement risk-based prioritization, directing remediation efforts toward the most critical vulnerabilities based on exploitability and the importance of the affected assets. Our team also provides detailed remediation guidance and integrates with patching and ticketing systems to ensure vulnerabilities are addressed effectively.\n\nExposure Management takes this further by offering unified attack surface visibility. We consolidate asset and vulnerability data from platforms such as Tenable One and Rapid7 Insight Platform, giving you a holistic view of your environment. Through attack path analysis, we help visualize how attackers could exploit vulnerabilities in sequence to reach high-value targets. Additionally, we provide security posture benchmarking and reporting, making it easier to assess and communicate your cyber risk to internal and external stakeholders.\n\nOur External Attack Surface Monitoring (EASM) offers continuous discovery and evaluation of your internet-facing assets, identifying risks before they can be exploited. To further validate your defenses, we conduct Penetration Testing and Red Teaming exercises that simulate real-world attack scenarios. These tests assess your security controls and reveal any exploitable weaknesses.\n\nThe benefits of our approach include a reduced likelihood of breaches, more efficient remediation processes, improved compliance with standards such as PCI DSS, and enhanced visibility across even the most complex digital environments.",
        image: "/images/solutions/proactive.webp",
        link: "/solutions/vulnerability"
      }
    ]
  },
  {
    id: "financial-technology",
    section: "Financial Technology Solutions",
    description: "Specialized solutions for financial institutions to manage risk, ensure compliance, and prevent financial crime.",
    subsections: [
      {
        title: "Secure and Compliant Solutions for the Modern Financial Services Industry",
        description: "The financial sector faces unique challenges, including stringent regulations, sophisticated fraud threats, and the growing demand for seamless digital experiences. Symbol Technologies offers specialized solutions and advisory services tailored to these needs. By partnering with industry leaders such as MDS-AFS (Wolters Kluwer, Fiserv) and Paygilant, we empower financial institutions to effectively manage risk, maintain regulatory compliance, prevent financial crime, and optimize overall performance.\n\nWe address a wide range of challenges in the financial industry. These include meeting complex regulatory requirements such as Basel III/IV, IFRS 9/17, and AML/CFT; combating ever-evolving financial crime and fraud tactics; and managing various forms of risk including credit, market, liquidity, and operational risks. Our services also help integrate disparate data sources for accurate reporting and analytics, ensure robust security for sensitive financial data and transactions, and drive efficiency in finance and risk operations.\n\nOur FinTech portfolio encompasses several key areas: Risk Management across financial, operational, and enterprise levels; Regulatory Compliance and Reporting; Financial Crime Prevention including Anti-Money Laundering (AML) and fraud detection; Finance and Performance Management; Data Management for finance and risk functions; and Audit and Governance, Risk, and Compliance (GRC) solutions tailored for financial services.",
        image: "/images/solutions/securefinancial.webp",
        link: "/solutions/fintech"
      },
      {
        title: "Comprehensive Risk Management for Financial Institutions",
        description: "Proactively identify, measure, and mitigate financial, operational, and enterprise-wide risks with our integrated solutions and expert advisory services, powered by MDS-AFS and Wolters Kluwer's OneSumX platform.\n\nOur Enterprise Risk Management (ERM) services help organizations establish robust frameworks and implement comprehensive solutions to manage risks holistically across the enterprise. In the area of Financial Risk Management, we provide targeted services for credit, market, and liquidity risks. For Credit Risk, we offer modeling, assessment, and management solutions that are fully compliant with IFRS 9, supported by MDS-AFS Advisory and the WK OneSumX platform. Market Risk services include tools that enable institutions to measure and manage their exposure to market volatility. For Liquidity Risk and Asset Liability Management (ALM), we deliver solutions designed to ensure liquidity adequacy in line with LCR and NSFR requirements, as well as manage interest rate risk in the banking book (IRRBB), again leveraging MDS-AFS Advisory and OneSumX.\n\nWe also address Operational Risk through Governance, Risk, and Compliance (GRC) solutions. Utilizing WK OneSumX GRC, we help institutions manage risks associated with internal processes, personnel, systems, and external events.\n\nThe benefits of our risk management services include improved risk-adjusted performance, enhanced compliance with regulatory standards, more informed strategic decision-making, and reduced potential for financial loss.",
        image: "/images/solutions/financialrisk.webp",
        link: "/solutions/risk-management"
      },
      {
        title: "Advanced Protection Against Fraud and Financial Crime",
        description: "Combat increasingly sophisticated financial crime with our multi-layered detection and prevention solutions. We provide robust platforms from MDS-AFS and Fiserv for enterprise-wide Anti-Money Laundering (AML) and compliance, alongside specialized mobile-first fraud detection through Paygilant's Anti-Fraud as a Service.\n\nOur Anti-Money Laundering (AML) and Compliance solutions include the implementation of advanced platforms from Fiserv, delivered via MDS-AFS. These platforms support transaction monitoring, Know Your Customer (KYC) and Customer Due Diligence (CDD) processes, sanctions screening, and regulatory reporting, ensuring institutions meet compliance requirements effectively.\n\nIn the area of Fraud Detection and Prevention, we offer comprehensive solutions. Our Enterprise Fraud Management systems provide a holistic approach to detecting and preventing fraud across multiple channels. For Mobile and Digital Fraud Prevention, we use Paygilant's technology to deliver frictionless, real-time fraud detection specifically designed for digital banking and payments, utilizing multi-layered intelligence. Additionally, our Anti-Fraud as a Service provides managed services with continuous monitoring and fraud analysis, offering organizations a proactive and scalable defense.\n\nWe also support Advanced Customer Identity Management, helping institutions securely verify and authenticate customers across all digital touchpoints.\n\nThe benefits of these solutions include significantly reduced fraud losses, enhanced regulatory compliance with AML and CFT standards, improved customer trust, and more efficient, streamlined investigation processes.",
        image: "/images/solutions/fraud.webp",
        link: "/solutions/financial-crime"
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    section: "Cloud & Infrastructure",
    description: "Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.",
    subsections: [
      {
        title: "Build Your Resilient and Scalable Digital Foundation",
        description: "Modernize your IT environment with flexible, secure, and efficient cloud and infrastructure solutions from Symbol Technologies. Whether you are migrating to the cloud, optimizing your data center, or building a hybrid environment, we offer the expertise and technology partnerships—including HPE, Dell, VMware, Microsoft, Nutanix, Vertiv, and NetApp—to create a strong foundation that aligns with your business objectives.\n\nWe address several key challenges faced by modern organizations. These include managing complexity across hybrid and multi-cloud environments, ensuring security and regulatory compliance in the cloud, and optimizing both cost and performance of cloud deployments. Additionally, we help modernize legacy data center infrastructures, enhance scalability and agility, and ensure infrastructure resilience and high availability.\n\nOur Cloud and Infrastructure Portfolio includes Cloud Services across private, hybrid, and multi-cloud models; Converged and Hyper-Converged Infrastructure (HCI/dHCI); Data Center Modernization and Infrastructure services; and Cloud Backup and Recovery solutions.",
        image: "https://via.placeholder.com/500x300/1976D2/FFF9C4?text=Cloud+%26+Infra",
        link: "/solutions/cloud"
      },
      {
        title: "Secure, High-Performance Networking for the Connected Enterprise",
        description: "Reliable and secure connectivity is the backbone of your digital operations. Symbol Technologies designs, implements, and manages intelligent networking and communication solutions that seamlessly and securely connect your users, applications, and data. We leverage industry-leading technologies from trusted partners such as Cisco, Fortinet, Arista, F5, and Mitel to deliver high-performance and future-ready infrastructure.\n\nWe address key networking challenges including supporting the bandwidth demands of modern applications and remote workforces, securing both the network perimeter and internal segments, and simplifying network management across distributed locations through solutions like SD-WAN. Additionally, we ensure consistent network performance and availability, enable effective integration of voice, video, and data collaboration tools, and provide robust secure access control through Network Access Control (NAC).\n\nOur Networking and Connectivity Portfolio includes Enterprise Networking solutions covering LAN, WLAN, and WAN; Secure Connectivity options such as SD-WAN, NAC, and 5G/LTE WAN; Communication and Collaboration systems; and Application Delivery Networking through ADC and Load Balancing technologies.",
        image: "/images/solutions/connectedenterprise.webp",
        link: "/solutions/networking"
      }
    ]
  },
  {
    id: "business-continuity",
    section: "Business Continuity & Resilience",
    description: "Comprehensive solutions to ensure business continuity and rapid recovery from disruptions.",
    subsections: [
      {
        title: "Maintain Operations and Recover Quickly from Disruptions",
        description: "Unplanned downtime can cripple your business. Symbol Technologies offers comprehensive Business Continuity Management (BCM) and IT Disaster Recovery (ITDR) solutions designed to minimize disruption, protect critical data, and ensure operational resilience. Through partnerships with industry leaders such as Veeam and Acronis, we deliver robust data protection and rapid recovery capabilities to keep your business running, even during crises.\n\nWe address several key challenges, including protecting against data loss caused by hardware failures, cyberattacks, or natural disasters; minimizing downtime for critical business applications; and meeting stringent recovery time objectives (RTO) and recovery point objectives (RPO). We also support the development and testing of effective BCM and disaster recovery plans, ensure resilience across physical, virtual, and cloud environments, and help organizations manage crises effectively when disruptions occur.\n\nOur Business Continuity Portfolio includes Business Continuity Management Planning and Advisory, IT Disaster Recovery Solutions (including Disaster Recovery as a Service—DRaaS), Data Backup and Recovery Services powered by Veeam and Acronis, and Crisis Management Frameworks.",
        image: "https://via.placeholder.com/500x300/455A64/FFD700?text=Continuity",
        link: "/solutions/business-continuity"
      }
    ]
  },
  {
    id: "grc",
    section: "Governance, Risk & Compliance (GRC)",
    description: "Integrated solutions to manage governance, risk, and compliance effectively.",
    subsections: [
      {
        title: "Integrate Governance, Manage Risk, and Ensure Compliance",
        description: "Navigate the complex landscape of regulations and corporate governance with integrated GRC (Governance, Risk, and Compliance) solutions from Symbol Technologies. We assist organizations in establishing clear policies, proactively managing risks, ensuring compliance with industry standards and regulations, and streamlining audit processes. Our services are often supported by specialized GRC platforms that provide centralized and automated management of these critical functions.\n\nWe address several key challenges, including staying up to date with constantly evolving regulatory requirements, managing risks across various business units and third-party relationships, and ensuring that internal policies are effectively communicated and enforced. Our solutions also help streamline both internal and external audit processes, protect sensitive data in accordance with privacy regulations such as GDPR, and demonstrate compliance to stakeholders and regulators.\n\nOur GRC Portfolio includes Integrated Risk Management Platforms, Policy Management Solutions, Compliance Management and Automation, Audit Management Solutions, Third-Party Risk Management (TPRM), and Data Privacy Management services.",
        image: "https://via.placeholder.com/500x300/2E7D32/FFD700?text=GRC",
        link: "/solutions/grc"
      }
    ]
  },
  {
    id: "data-ai",
    section: "Data, AI & Intelligence",
    description: "Harness the power of data and artificial intelligence to drive innovation and make informed decisions.",
    subsections: [
      {
        title: "Unlock Insights and Drive Innovation with Data and AI",
        description: "Data is your most valuable asset. Symbol Technologies helps you harness its full potential through robust business intelligence, advanced analytics, and cutting-edge Artificial Intelligence applications. In line with our vision to pioneer AI-driven transformation, we empower organizations to make smarter decisions, automate processes, and create new value streams.\n\nWe address several key challenges in the data landscape. These include extracting meaningful insights from ever-growing data volumes, breaking down data silos within organizations, and implementing AI solutions both effectively and ethically. We also focus on ensuring data quality and governance, as well as building scalable data infrastructures to support long-term growth.\n\nOur Data, AI, and Business Intelligence (BI) Portfolio includes Business Intelligence and Data Warehousing solutions, AI Applied Solutions tailored for sectors like agriculture and security, and comprehensive Data Management and Governance services.",
        image: "https://via.placeholder.com/500x300/512DA8/FFD700?text=Data+%26+AI",
        link: "/solutions/data-ai"
      },
      {
        title: "Practical AI Solutions for Real-World Impact",
        description: "Move beyond the hype and leverage Artificial Intelligence to address real business challenges. At Symbol Technologies, we specialize in integrating AI and Machine Learning into practical applications that generate measurable results, driving improvements in efficiency, sustainability, and security.\n\nOne of our key offerings is AI for Agriculture, highlighted by our IRRIGOPTIMAL solution. This intelligent irrigation management system optimizes water usage—reporting savings of 35–50%—and boosts crop yields by leveraging AI, IoT sensors, and weather data. Developed in partnership with Westrade, IRRIGOPTIMAL includes features such as field monitoring, disease management, automated irrigation control, and pest management alerts.\n\nIn the realm of AI for Cybersecurity, we enhance threat detection capabilities by embedding AI and machine learning into our security operations platforms, including SIEM, SOAR, and Generative AI tools for SOC environments. This allows for faster identification of sophisticated threats and enables Automated Response, streamlining incident handling through AI-driven orchestration and decision-making.\n\nWe also offer Custom AI Development and Integration, helping clients develop bespoke AI models and embed AI capabilities into their existing business processes. (Company-specific examples may be provided upon request.)\n\nThe benefits of our AI-driven solutions include increased operational efficiency, cost savings, improved decision-making, enhanced security posture, and more sustainable practices—particularly in agriculture.",
        image: "https://via.placeholder.com/500x300/388E3C/FFD700?text=AI+Solutions",
        link: "/solutions/ai-solutions"
      }
    ]
  },
  {
    id: "managed-it",
    section: "Managed IT Services",
    description: "Comprehensive managed services to optimize operations and focus on innovation.",
    subsections: [
      {
        title: "Optimize Operations and Focus on Innovation with Expert Managed Services",
        description: "Free up your internal IT resources to focus on strategic initiatives by outsourcing day-to-day management and support to Symbol Technologies. Our comprehensive managed services portfolio encompasses security, infrastructure, networking, and specialized service areas, delivering reliable performance, enhanced security, and predictable costs. Our CyberSOC also provides state-of-the-art Managed Security Services to further bolster your organization's defenses.\n\nWe address several common challenges faced by organizations, including managing complex IT environments with limited internal resources, ensuring 24/7 system availability and performance, and accessing specialized skills in areas such as cybersecurity and cloud computing. Our services help control operational IT costs while keeping your systems aligned with the latest technology advancements and security threat landscapes.\n\nOur Managed Services Portfolio includes Managed Security Services, Managed Network Services, Managed Cloud Services, Managed IT Support and Helpdesk, Managed Backup and Disaster Recovery, and Specialized Managed Services such as Managed Anti-Fraud.",
        image: "https://via.placeholder.com/500x300/6D4C41/FFD700?text=Managed+Services",
        link: "/solutions/managed-services"
      }
    ]
  },
  {
    id: "digital-solutions",
    section: "Digital Solutions & Training",
    description: "Comprehensive digital development and training services to enhance workforce capabilities.",
    subsections: [
      {
        title: "Empower Your Workforce with Advanced Training",
        description: "Drive user engagement and elevate workforce capabilities through Symbol Technologies' advanced digital training and development services. We help organizations build robust digital competencies and empower their teams through high-impact training programs and hands-on learning experiences. From custom web and application development to expert-led e-learning platforms and advanced cybersecurity education, our solutions are designed to meet the evolving demands of modern enterprises.\n\nWe address critical challenges such as creating intuitive and responsive digital interfaces, developing custom applications tailored to complex business needs, and delivering in-depth, role-specific training and knowledge transfer. Our focus extends to enhancing cybersecurity readiness across the organization and implementing scalable, structured learning and development programs that align with strategic goals.\n\nOur Advanced Training and Digital Solutions Portfolio includes Digital Channel Solutions, Web and Application Development, E-Learning Platforms and Interactive Content, Advanced Cybersecurity Training and Awareness Programs, and Specialized Technology & Certification Training. These include Pearson VUE Test Center services and vendor-authorized training modules designed to prepare teams for industry-recognized certifications and real-world scenarios.",
        image: "https://via.placeholder.com/500x300/FF8F00/0A0F2C?text=Digital+Training",
        link: "/solutions/digital-solutions"
      },
      {
        title: "Engaging Digital Experiences for Your Customers and Employees",
        description: "We help organizations design, develop, and manage effective digital channels to interact with customers, partners, and employees. Whether it's building modern web portals, developing mobile applications, or implementing customer relationship management (CRM) platforms, digital marketing, our solutions focus on delivering seamless and intuitive user experiences.\n\nThe benefits are Improved customer engagement, streamlined workflows, enhanced brand presence, better employee collaboration.",
        image: "https://via.placeholder.com/500x300/FF8F00/0A0F2C?text=Digital+Experience",
        link: "/solutions/digital-experience"
      }
    ]
  }
];

export default function ServicesPage() {
  const { scrollY } = useScroll();
  const [showArrows, setShowArrows] = useState(true);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [inViewSections, setInViewSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowArrows(latest < 100);
    });
  }, [scrollY]);

  const handleViewportChange = (sectionId: string, inView: boolean) => {
    setInViewSections(prev => ({
      ...prev,
      [sectionId]: inView
    }));
    
    if (!inView) {
      setExpandedSections(prev => ({
        ...prev,
        [sectionId]: false
      }));
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getTruncatedText = (text: string, sectionId: string) => {
    const lines = text.split('\n\n');
    const isExpanded = expandedSections[sectionId];
    
    if (isExpanded) {
      return (
        <>
          {text}
          <button
            onClick={() => toggleSection(sectionId)}
            className="text-blue-600 hover:text-blue-800 ml-2 font-medium"
          >
            Show Less
          </button>
        </>
      );
    }

    // Show only the first paragraph for preview
    const truncatedText = lines[0];
    return (
      <>
        {truncatedText}
        <button
          onClick={() => toggleSection(sectionId)}
          className="text-blue-600 hover:text-blue-800 ml-2 font-medium"
        >
          More...
        </button>
      </>
    );
  };

  return (
    <main className="min-h-screen mt-0 pt-0 !mt-0 !pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full mb-0 md:mb-0 mt-0 pt-0 !mt-0 !pt-0">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/solutions/hero_solutions_desktop.webp"
            alt="Solutions Hero"
            fill
            priority
            className="object-cover object-center hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/solutions/hero_solutions_mobile.webp"
            alt="Solutions Hero Mobile"
            fill
            priority
            className="object-cover object-center md:hidden"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-start justify-start pt-2 md:justify-start md:pt-0">
          <div className="container mx-auto px-4 text-white pt-16 md:pt-0 md:max-w-2xl md:ml-16 md:mt-40" >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg max-w-full text-center md:text-left w-full"
            >
              Comprehensive IT Solutions for a Smarter Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-lg md:text-xl text-[#FFF9C4] mb-4 sm:mb-6 md:mb-8 drop-shadow-md max-w-full text-center md:text-left w-full"
            >
              Symbol Technologies delivers AI-driven, end-to-end digital solutions—from cybersecurity and cloud infrastructure to automation—empowering modern enterprises with agility, resilience, and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-6 flex justify-center md:justify-start w-full"
            >
              <a
                href="#security-solutions"
                className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-600 hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-95"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Bouncing Arrows */}
        {showArrows && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.a
              href="#security-solutions"
              className="cursor-pointer group block"
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="block">
                <svg
                  width="64" height="72" viewBox="0 0 64 72" fill="none"
                  className="drop-shadow-lg animate-pulse"
                  style={{ filter: 'drop-shadow(0 0 8px #FFD70088)' }}
                >
                  <defs>
                    <linearGradient id="hex-gold" x1="0" y1="0" x2="64" y2="72" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fde68a" />
                      <stop offset="1" stopColor="#f59e42" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="32,4 60,20 60,52 32,68 4,52 4,20"
                    stroke="url(#hex-gold)"
                    strokeWidth="3"
                    fill="rgba(255, 215, 0, 0.08)"
                    className="transition-all duration-300"
                  />
                  <g>
                    <polyline points="22,32 32,44 42,32" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,42 32,54 42,42" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </span>
            </motion.a>
          </div>
        )}
      </section>

      {/* Solutions Sections */}
      {solutions.map((section, sectionIndex) => {
        // Define color schemes for each section
        type SectionId = 'security-solutions' | 'financial-technology' | 'cloud-infrastructure' | 'business-continuity' | 'grc' | 'data-ai' | 'managed-it' | 'digital-solutions';
        
        const sectionColors: Record<SectionId, string> = {
          'security-solutions': 'from-slate-50 to-blue-50',
          'financial-technology': 'from-slate-50 to-cyan-50',
          'cloud-infrastructure': 'from-slate-50 to-indigo-50',
          'business-continuity': 'from-slate-50 to-sky-50',
          'grc': 'from-slate-50 to-violet-50',
          'data-ai': 'from-slate-50 to-blue-50',
          'managed-it': 'from-slate-50 to-indigo-50',
          'digital-solutions': 'from-slate-50 to-cyan-50'
        };

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-3 sm:py-3.5 px-4 sm:px-6 md:px-10 bg-gradient-to-b ${sectionColors[section.id as SectionId]} scroll-mt-[110px]`}
          >
            <div className="max-w-7xl mx-auto rounded-2xl shadow-md p-6 sm:p-8 md:p-12 bg-white/95 backdrop-blur-sm">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002E6D] mb-4">
                  {section.section}
                </h2>
                <motion.p
                  className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                >
                  {section.description}
                </motion.p>
                <div className="w-full h-[2px] bg-yellow-400 mb-10"></div>
              </motion.div>
              {section.subsections.map((subsection, index) => (
                <motion.div
                  key={subsection.title}
                  className={`flex flex-col md:flex-row gap-8 md:gap-10 items-start mb-12 ${sectionIndex % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  onViewportEnter={() => handleViewportChange(`${section.id}-${index}`, true)}
                  onViewportLeave={() => handleViewportChange(`${section.id}-${index}`, false)}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Left Side (Image) */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={subsection.image}
                      alt="Solution"
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                  {/* Right Side (Content) */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-semibold text-[#002E6D] mb-2">
                      {subsection.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 whitespace-pre-line">
                      {getTruncatedText(subsection.description, `${section.id}-${index}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
} 