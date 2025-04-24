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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' }
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180' }
    ]
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
