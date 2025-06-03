import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.symboltech.net' // Updated domain name

  // Static routes
  const staticRoutes = [
    '',
    '/solutions',
    // Cybersecurity Solutions
    '/solutions/cybersecurity',
    '/solutions/cybersecurity/network-security',
    '/solutions/cybersecurity/endpoint-security',
    '/solutions/cybersecurity/cloud-security',
    '/solutions/cybersecurity/identity-access-management',
    '/solutions/cybersecurity/security-operations-center',
    // Fintech Solutions
    '/solutions/fintech',
    '/solutions/fintech/payment-solutions',
    '/solutions/fintech/banking-solutions',
    '/solutions/fintech/insurance-solutions',
    // Cloud & Infrastructure Solutions
    '/solutions/cloud-infrastructure',
    '/solutions/cloud-infrastructure/cloud-migration',
    '/solutions/cloud-infrastructure/hybrid-cloud',
    '/solutions/cloud-infrastructure/private-cloud',
    '/solutions/cloud-infrastructure/data-center',
    // Business Continuity Solutions
    '/solutions/business-continuity',
    '/solutions/business-continuity/disaster-recovery',
    '/solutions/business-continuity/backup-solutions',
    '/solutions/business-continuity/high-availability',
    // GRC Solutions
    '/solutions/grc',
    '/solutions/grc/governance',
    '/solutions/grc/risk-management',
    '/solutions/grc/compliance',
    // Data & AI Solutions
    '/solutions/data-ai',
    '/solutions/data-ai/business-intelligence',
    '/solutions/data-ai/artificial-intelligence',
    '/solutions/data-ai/data-analytics',
    '/solutions/data-ai/data-warehousing',
    // Managed Services
    '/solutions/managed-services',
    '/solutions/managed-services/network-management',
    '/solutions/managed-services/security-management',
    '/solutions/managed-services/cloud-management',
    '/solutions/managed-services/help-desk',
    // Digital Training
    '/solutions/digital-training',
    '/solutions/digital-training/technical-training',
    '/solutions/digital-training/certification-programs',
    '/solutions/digital-training/custom-training',
    // Other Pages
    '/bpo',
    '/insights',
    '/contact',
    '/aboutus',
    '/partners',
    '/clients',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog routes
  const blogRoutes = allBlogs.map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
} 