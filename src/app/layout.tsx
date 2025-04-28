import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollArrow from '@/components/home/ScrollArrow'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/layout/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Symbol Technologies - Professional IT Services and Solutions',
  description: 'Symbol Technologies provides enterprise-grade IT solutions including cybersecurity, cloud infrastructure, and managed services.',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', url: '/favicon_48x48.png', sizes: '48x48' },
    { rel: 'icon', type: 'image/png', url: '/favicon_192x192.png', sizes: '192x192' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <Breadcrumb />
        <main>{children}</main>
        <ScrollArrow />
        <Footer />
      </body>
    </html>
  )
}
