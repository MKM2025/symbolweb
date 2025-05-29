import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.symboltech.net' // Updated domain name

  // Static routes
  const staticRoutes = [
    '',
    '/solutions',
    '/solutions/security-solutions',
    '/solutions/financial-technology',
    '/solutions/cloud-infrastructure',
    '/solutions/business-continuity',
    '/solutions/grc',
    '/solutions/data-ai',
    '/solutions/managed-it',
    '/solutions/digital-solutions',
    '/bpo',
    '/insights',
    '/contact',
    '/aboutus',
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